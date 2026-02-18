# 🚀 CHAT APPLICATION (MERN-STYLE WITH EJS)

A simple **full-stack chat application** built using **Node.js, Express, MongoDB, and EJS**.  
This project allows users to sign up, log in, view all registered users, and start **one-to-one conversations**.  
It includes message **send, edit, and delete** functionality with a **clean UI and responsive design** for both mobile and desktop.

---

## ✨ HIGHLIGHTS

- Secure user Signup & Login system  
- One-to-One chat between registered users  
- Send, Edit, and Delete messages  
- Responsive UI (Mobile & Desktop friendly)  
- MongoDB Atlas cloud database integration  

---

## 🔐 AUTHENTICATION

- Users can **Sign Up** using username, email, and password  
- Passwords are securely stored using **bcrypt hashing**  
- Logged-in user identity is passed across pages using query parameters  
- Only the message sender can **edit or delete** their messages  

---

## 🛠 TECH STACK

| Layer            | Technology |
|------------------|------------|
| Frontend         | HTML, CSS, EJS |
| Backend          | Node.js, Express.js |
| Database         | MongoDB Atlas |
| Authentication   | bcrypt |
| Styling          | Custom CSS (Responsive UI) |
| Version Control  | Git & GitHub |
| Deployment       | Render / Railway (Planned) |

---

## 🚀 FUTURE ENHANCEMENTS

- Real-time chatting using **Socket.IO**  
- JWT-based authentication  
- Phone / Email OTP verification to prevent fake users  
- Online / Offline user status  
- Typing indicator & message seen feature  
- Profile pictures and group chat support  

---

## ▶️ HOW TO RUN THIS PROJECT LOCALLY

### 1️⃣ Clone the repository
bash
git clone https://github.com/PratikKothare123/chat-application.git
cd chat-application

## 2️⃣ Install dependencies
npm install

## 3️⃣ Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

## 4️⃣ Start the server
npm start

## 5️⃣ Open in browser
http://localhost:5000

### 🌐 DEPLOY LINK

## 🔗 Live Demo:
(Will be added after deployment)

## 📁 PROJECT STRUCTURE (SIMPLIFIED)
```
chat-application/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── chat.routes.js
│   ├── views/
│   │   ├── login.ejs
│   │   ├── signup.ejs
│   │   ├── home.ejs
│   │   ├── chat.ejs
│   │   └── edit.ejs
│   ├── app.js
│   └── server.js
│
├── public/
│   └── style.css
│
├── .env
├── package.json
└── README.md
```
## 👨‍💻 DEVELOPED BY

## Pratik Kothare
🎓 Computer Science Engineering (CSE)
💻 Full Stack Developer
