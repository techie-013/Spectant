// Serverless function for Vercel
// This handles all backend logic for the feedback form
// Location: /api/feedback.js

// In-memory storage (Vercel doesn't persist files)
// For real production, replace with MongoDB, PostgreSQL, or Firebase
let feedbackStore = [];

// ============================================
// SECURITY FUNCTIONS
// ============================================

// HTML escaping to prevent XSS attacks
const escapeHtml = (str) => {
  if (!str) return '';
  return str.replace(/[&<>]/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  })[m]);
};

// Strict email validation using regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  return emailRegex.test(email);
};

// ============================================
// RATE LIMITING (Simple in-memory version)
// ============================================

const rateLimit = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5;      // Max 5 requests per minute
  
  // Check if IP exists in rate limit map
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [now]);
    return false;
  }
  
  // Clean old requests outside the time window
  const requests = rateLimit.get(ip).filter(time => now - time < windowMs);
  
  // Check if over limit
  if (requests.length >= maxRequests) {
    return true;
  }
  
  // Add current request
  requests.push(now);
  rateLimit.set(ip, requests);
  return false;
};

// ============================================
// MAIN SERVERLESS FUNCTION
// ============================================

module.exports = async (req, res) => {
  // Enable CORS for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request (CORS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only accept POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
  
  // Get client IP address (Vercel provides this)
  const clientIp = req.headers['x-forwarded-for'] || 
                   req.headers['x-real-ip'] || 
                   req.socket.remoteAddress || 
                   'unknown';
  
  // Apply rate limiting
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please wait a minute before submitting again.' 
    });
  }
  
  // Extract data from request body
  const { name, email, feedback } = req.body;
  
  // ============================================
  // VALIDATION CHECKS
  // ============================================
  
  // Check 1: All fields required
  if (!name || !email || !feedback) {
    return res.status(400).json({ 
      error: 'All fields are required: name, email, and feedback' 
    });
  }
  
  // Check 2: Email format validation
  if (!isValidEmail(email)) {
    return res.status(400).json({ 
      error: 'Invalid email format. Example: user@domain.com' 
    });
  }
  
  // Check 3: Name minimum length
  if (name.trim().length < 2) {
    return res.status(400).json({ 
      error: 'Name must be at least 2 characters long' 
    });
  }
  
  // Check 4: Name maximum length (prevent abuse)
  if (name.trim().length > 100) {
    return res.status(400).json({ 
      error: 'Name must be less than 100 characters' 
    });
  }
  
  // Check 5: Feedback minimum length
  if (feedback.trim().length < 5) {
    return res.status(400).json({ 
      error: 'Feedback must be at least 5 characters long' 
    });
  }
  
  // Check 6: Feedback maximum length
  if (feedback.trim().length > 2000) {
    return res.status(400).json({ 
      error: 'Feedback must be less than 2000 characters' 
    });
  }
  
  // ============================================
  // SANITIZE INPUTS (Security)
  // ============================================
  
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeFeedback = escapeHtml(feedback.trim());
  
  // ============================================
  // STORE FEEDBACK
  // ============================================
  
  const newEntry = {
    id: Date.now(),                           // Unique ID
    name: safeName,                           // Sanitized name
    email: safeEmail,                         // Sanitized email
    feedback: safeFeedback,                   // Sanitized feedback
    timestamp: new Date().toISOString(),      // ISO format timestamp
    ip: clientIp.substring(0, 15)             // Partial IP for logging (privacy)
  };
  
  // Add to in-memory store
  feedbackStore.push(newEntry);
  
  // Keep only last 100 entries to prevent memory issues
  if (feedbackStore.length > 100) {
    feedbackStore = feedbackStore.slice(-100);
  }
  
  // Log for debugging (visible in Vercel logs)
  console.log(`✅ Feedback received from: ${safeName} (${safeEmail})`);
  console.log(`📊 Total feedback count: ${feedbackStore.length}`);
  
  // ============================================
  // RETURN SUCCESS RESPONSE
  // ============================================
  
  res.status(200).json({ 
    success: true, 
    message: 'Feedback submitted successfully! Thank you for your input.',
    feedbackId: newEntry.id,
    timestamp: newEntry.timestamp
  });
};

// ============================================
// HELPER FUNCTION TO GET ALL FEEDBACK (Admin only)
// ============================================

// Uncomment this if you want to add a GET endpoint
// To use: Send GET request to /api/feedback
/*
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    // Optional: Add authentication here
    return res.status(200).json({ 
      total: feedbackStore.length,
      feedbacks: feedbackStore 
    });
  }
  
  // ... rest of POST code above
};
*/