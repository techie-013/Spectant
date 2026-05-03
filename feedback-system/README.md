cat > README.md << 'EOF'
# 📝 Feedback Form System - Full Stack Internship Project

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 🎯 Project Overview

This is a **secure, production-ready feedback collection system** built for a Software Development Internship assignment. The system allows users to submit feedback through a web form with multiple security layers including XSS protection, rate limiting, and input validation.

### ✅ Assignment Requirements Completed

| Requirement | Status | Details |
|-------------|--------|---------|
| Frontend form with Name, Email, Feedback | ✅ | Modern responsive UI |
| Backend API endpoint (POST /feedback) | ✅ | Serverless function on Vercel |
| Data storage | ✅ | In-memory (ready for MongoDB) |
| Basic validation | ✅ | Multiple validation layers |
| 8-10 break scenarios | ✅ | 10 scenarios documented |
| Top 3 issues fixed | ✅ | XSS, Rate limiting, Email validation |
| Scale thinking for 10,000 users | ✅ | Complete architecture plan |

---

## 🌐 Live Demo

| Platform | URL | Status |
|----------|-----|--------|
| **Frontend Form** | `https://your-project.vercel.app` | 🟢 Deploy to see live |
| **API Endpoint** | `https://your-project.vercel.app/api/feedback` | 🟢 POST only |
| **GitHub Repository** | `https://github.com/your-username/feedback-system` | 🟢 Source code |

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/feedback-system)

---

## ✨ Features

### 🛡️ Security Features
- **XSS Protection** - All user inputs are HTML-escaped
- **Rate Limiting** - Maximum 5 requests per minute per IP
- **Email Validation** - Strict regex pattern validation
- **Input Sanitization** - Removes malicious code
- **Length Limits** - Name: 2-100 chars, Feedback: 5-2000 chars
- **CORS Enabled** - Secure cross-origin resource sharing

### 🎨 Functional Features
- **Real-time Validation** - Instant email format checking
- **Loading States** - Visual feedback during submission
- **Character Counter** - Shows remaining characters
- **Responsive Design** - Works on all devices
- **Accessibility** - Semantic HTML, keyboard navigation
- **No Page Reload** - AJAX smooth submission

### 📊 Technical Features
- **Serverless Architecture** - Auto-scaling on Vercel
- **In-memory Storage** - Fast, zero-config
- **Request Logging** - Console logs for debugging
- **Error Handling** - Comprehensive error responses

---

## 🛠️ Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Runtime | Node.js | 18.x | JavaScript execution |
| Hosting | Vercel | Latest | Serverless deployment |
| Backend | Serverless Function | - | API endpoint |
| Frontend | HTML5, CSS3, ES6+ | - | User interface |
| Rate Limiting | Custom in-memory | - | Request throttling |
| Storage | In-memory array | - | Temporary storage |

---

## 🚀 Quick Start

### Prerequisites

```bash
# Check if Node.js is installed
node --version   # Should be v14 or higher

# Install Vercel CLI
npm install -g vercel