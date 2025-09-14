# 🔐 JWT Basics with Node.js & Express

This project demonstrates the **fundamentals of authentication and authorization** using **JWT (JSON Web Token)** in a Node.js + Express backend.  

It’s a simple but powerful example of how to implement **user login**, **protected routes**, and **middleware-based authentication** — a must-have skill for real-world backend systems.

---

## 🚀 Features
- User login with mock/static user data
- Generate **JWT token** upon successful login
- Protect routes using authentication middleware
- Return meaningful error messages for unauthorized access
- Environment variable management for security

---

## 🛠 Tech Stack
- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **jsonwebtoken** – JWT token generation & verification
- **dotenv** – Manage environment variables

---

## 📂 Project Structure
```

JWT\_Basics\_Node/
│── middleware/        # Authentication middleware
│── routes/            # Routes (login, dashboard)
│── app.js             # Express app setup
│── .env               # Environment variables (JWT secret)
│── package.json
│── README.md

````

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Karthick-19/JWT_Basics_Node.git
   cd JWT_Basics_Node
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root directory with:

   ```env
   PORT=5000
   JWT_SECRET=your_secret_key
   JWT_LIFETIME=1d
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   API will be available at `http://localhost:5000`

---

## 📌 API Endpoints

| Method | Endpoint     | Description                          |
| ------ | ------------ | ------------------------------------ |
| POST   | `/login`     | Logs in a user and returns JWT token |
| GET    | `/dashboard` | Protected route (requires token)     |

---

## 🧪 Example Usage

### 1. Login to Get Token

```http
POST /login
Content-Type: application/json

{
  "username": "karthick",
  "password": "secret"
}
```

**Response:**

```json
{
  "msg": "user created",
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### 2. Access Protected Route

```http
GET /dashboard
Authorization: Bearer <your_token>
```

**Response:**

```json
{
  "msg": "Hello, Karthick!",
  "secret": "Here is your authorized data"
}
```

---

## 🎯 Learning Outcomes

* Understanding JWT creation and verification
* Securing routes with middleware
* Working with environment variables
* Handling login requests safely

---

## 📖 Future Improvements

* Connect to a real database (MongoDB)
* Add password hashing (bcrypt)
* Create proper user signup/login flow
* Refresh token mechanism

---

## 👤 Author

**Karthick Cruze**
📌 Learning Node.js, Express.js & authentication best practices
🔗 [GitHub](https://github.com/Karthick-19)

```

---
