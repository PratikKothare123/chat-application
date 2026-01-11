Chat Application (MERN-style with EJS)

A simple full-stack chat application built using Node.js, Express, MongoDB, and EJS.
This project allows users to sign up, log in, view all registered users, and start one-to-one conversations with basic CRUD operations on messages. It is designed to simulate real-world chat application flow with clean UI and responsive design.

✨ Highlights

User Signup & Login system

One-to-One Chat between users

Send, Edit, and Delete messages

Responsive UI (Mobile & Desktop friendly)

MongoDB Atlas integration for cloud database

🔐 Authentication

Users can Sign Up using username, email, and password

Passwords are securely stored using bcrypt hashing

After login, user identity is passed across pages using query parameters

Only the message sender can edit or delete their messages

🛠 Tech Stack
Layer	Technology
Frontend	HTML, CSS, EJS
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	bcrypt
Styling	Custom CSS (Responsive)
Deployment	()
🚀 Future Enhancements

Real-time chatting using Socket.IO

User authentication using JWT

OTP verification for phone/email to avoid fake users

Online / Offline user status

Message seen & typing indicators

Profile pictures & group chat feature

▶️ How to Run This Project Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/chat-application.git
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
( )

📁 Project Structure (Simplified)
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

👨‍💻 Developed By

Pratik Kothare
🎓 Computer Science Engineering (CSE)
💻 Full-Stack Developer
