# 🚀 Chat Application (MERN-style with EJS)

A simple **full-stack chat application** built using **Node.js, Express, MongoDB, and EJS**.  
This project allows users to sign up, log in, view all registered users, and start **one-to-one conversations**.  
It supports sending, editing, and deleting messages with a **clean UI and responsive design** for both mobile and desktop.

---

## ✨ Highlights

- User Signup & Login system  
- One-to-One Chat between users  
- Send, Edit, and Delete messages  
- Responsive UI (Mobile & Desktop friendly)  
- MongoDB Atlas integration for cloud database  

---

## 🔐 Authentication

- Users can **Sign Up** using username, email, and password  
- Passwords are securely stored using **bcrypt hashing**  
- Logged-in user identity is passed across pages using query parameters  
- Only the message sender can **edit or delete** their messages  

---

## 🛠 Tech Stack

| Category        | Technology Used |
|-----------------|----------------|
| Frontend        | HTML, CSS, EJS |
| Backend         | Node.js, Express.js |
| Database        | MongoDB Atlas |
| Authentication | bcrypt |
| Styling         | Custom CSS (Responsive UI) |
| Version Control | Git & GitHub |
| Deployment      | Render  |

---

## 🚀 Future Enhancements

- Real-time chat using **Socket.IO**  
- JWT-based authentication  
- OTP verification (Email / Phone) to avoid fake users  
- Online / Offline user status  
- Message seen & typing indicators  
- Profile pictures and group chat  

---

## ▶️ How to Run This Project Locally

### 1️⃣ Clone the repository
bash
git clone https://github.com/PratikKothare123/chat-application.git
cd chat-application

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

4️⃣ Start the server
npm start

5️⃣ Open in browser
http://localhost:5000

🌐 Deploy Link

🔗 Live Demo:
(https://chat-application-q5ya.onrender.com)

📁 Project Structure (Simplified)

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
## 👨‍💻 Developed By

# Pratik Kothare
🎓 Computer Science Engineering (CSE)
💻 Full Stack Developer

## ⭐ If you like this project, don’t forget to star the repository!
