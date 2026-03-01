Stock Trading Platform (Zerodha Clone)

A full-stack stock trading simulation platform inspired by Zerodha, built using the MERN stack. The platform enables users to simulate stock trading with real-time market data visualization, portfolio tracking, and order management.

🚀 Features

🔐 Secure User Authentication

JWT-based authentication

Protected routes and session management

Encrypted password storage

📊 Real-Time Market Data Visualization

Interactive stock charts using Charting Library

Dynamic price updates

Historical data analysis

💼 Portfolio & Holdings Dashboard

View total investment value

Track profit/loss in real-time

Holdings breakdown with performance metrics

🔄 Buy/Sell Order Execution

Simulated trade execution

Market & limit order support

Transaction validation

📑 Positions & Transaction Management

Track open and closed positions

Complete transaction history

Order status monitoring

🌐 RESTful API Architecture

Modular backend structure

Clean API routing

Efficient database interaction

🛠️ Tech Stack
Frontend

React.js

Axios

Charting Library (for stock visualization)

CSS / Tailwind (if used)

Backend

Node.js

Express.js

MongoDB

REST APIs

JWT Authentication


🏗️ System Architecture
Client (React.js)
      ↓
REST API (Express.js)
      ↓
Business Logic (Node.js)
      ↓
Database (MongoDB)


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/zerodha-clone.git
cd zerodha-clone
2️⃣ Install Dependencies

Frontend

cd client
npm install
npm start

Backend

cd server
npm install
npm run dev

📊 Key Functionalities

Real-time stock price updates

Portfolio valuation engine

Order placement & validation logic

REST API integration between frontend and backend

🔐 Security Implementations

Password hashing using bcrypt

JWT-based authorization

Input validation & sanitization

Protected API routes

📌 Future Enhancements

WebSocket integration for live trading updates

Admin dashboard for stock management

Advanced analytics (moving averages, RSI, etc.)

Deployment on Render
