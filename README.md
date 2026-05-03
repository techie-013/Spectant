# 📝 Spectant Feedback Form System

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 🎯 Project Overview

This is a **secure feedback collection system** built for the Spectant Internship Assignment.

The system allows users to submit feedback via a web form with proper validation, security, and smooth UI experience.

---

## 👩‍💻 Author Details

- **Name:** Sneha Singh  
- **Roll No:** 240010130100  
- **Email:** sneha.olf@gmail.com  

🔗 **Resume:**  
https://drive.google.com/drive/folders/1zJrbTVEmFh8JTdmPRmWdw5vguLF7oNeX?usp=sharing  

🔗 **GitHub Repository:**  
https://github.com/techie-013/Spectant4  

---

## ✅ Assignment Coverage

| Requirement | Status | Details |
|------------|--------|--------|
| Frontend Form | ✅ | Name, Email, Feedback |
| Backend API | ✅ | POST /api/feedback |
| Data Storage | ✅ | In-memory |
| Validation | ✅ | Email + required fields |
| Failure Cases | ✅ | 10 scenarios |
| Improvements | ✅ | Security + validation |
| Scalability Thinking | ✅ | Included |

---

## 🌐 Live Demo

After deployment:

- **Frontend:** https://your-vercel-url.vercel.app  
- **API:** https://your-vercel-url.vercel.app/api/feedback  

---

## ✨ Features

### 🛡️ Security Features
- XSS Protection (HTML escaping)
- Rate Limiting (5 requests/min)
- Email validation (regex)
- Input sanitization
- Length validation

### 🎨 UI Features
- Clean responsive design
- Loading spinner
- Success/error messages
- No page reload (AJAX)

### ⚙️ Technical Features
- Serverless backend (Vercel)
- In-memory storage
- Proper error handling

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js |
| Hosting | Vercel |
| API | Serverless Functions |

---

## 📁 Project Structure

```
Spectant/
│
├── api/
│   └── feedback.js
│
├── public/
│   └── index.html
│
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

---

## 🚀 Setup & Deployment

### 🔹 Run Locally
```
vercel dev
```

Open:
```
http://localhost:3000
```

---

### 🔹 Deploy to Production
```
vercel --prod
```

---

## 📡 API Documentation

### Endpoint
```
POST /api/feedback
```

### Request Body
```json
{
  "name": "Sneha Singh",
  "email": "sneha@example.com",
  "feedback": "Great website!"
}
```

---

### ✅ Success Response
```json
{
  "success": true,
  "message": "Feedback submitted successfully",
  "feedbackId": 1712345678901
}
```

---

### ❌ Error Responses

| Status | Message | Reason |
|-------|--------|-------|
| 400 | All fields required | Missing input |
| 400 | Invalid email | Wrong format |
| 400 | Name too short/long | Validation |
| 400 | Feedback too short/long | Validation |
| 429 | Too many requests | Rate limit |
| 405 | Method not allowed | Wrong method |

---

## 🧪 Testing (Break Scenarios)

- Empty inputs  
- Invalid email  
- Script injection (`<script>`)  
- Long text input  
- API failure  
- Network timeout  
- Duplicate submissions  
- Rapid requests (spam)  

---

## 🔧 Improvements Implemented

### 1. Input Validation
- Required fields  
- Email validation  

### 2. Security
- XSS protection  
- Input sanitization  

### 3. Rate Limiting
- Prevents spam  

---

## 📈 Scalability (10,000 Users)

### Problems:
- Server overload  
- Slow response  
- Data loss  

### Solutions:
- Use database (MongoDB/MySQL)  
- Cloud deployment  
- Load balancing  

---

## 📌 Future Improvements

- Database integration  
- Authentication  
- CAPTCHA  
- Admin dashboard  

---

## 📄 License

This project is for internship assignment purposes.

---
