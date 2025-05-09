# 🧾 MeetX Backend - Activity Booking API

This is a backend REST API built as part of the Backend Developer Internship assignment for **MeetX** (Altrodav Technologies Pvt. Ltd). It provides user authentication and basic functionality to browse and book activities like sports or events.

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT
- **Validation:** express-validator
- **Hashing:** bcrypt
- **API Testing:** Postman

## 📁 Folder Structure
```
meetx-backend/
├── controllers/ 
├── models/ 
├── routes/ 
├── middleware/
├── config/
├── .env 
├── app.js 
├── package.json
└── README.md
```


##  Setup Instructions

1. **Clone the repository**
```
git clone https://github.com/YOUR_USERNAME/meetx-backend.git
cd meetx-backend
```
2. **Install dependencies**
```
npm install
Create .env file
```

3.**Setup .env**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/meetx
JWT_SECRET=your_jwt_secret

```
4. **Run the server**
```
npm run dev
```
Server will start at http://localhost:5000.

 ## API Endpoints
 **Authentication**
```
Method	Endpoint	          Description
POST	/meetx/auth/register	 Register a new user
POST	/meetx/auth/login	    Login and get JWT token
```

**Activities**
```
Method	Endpoint	Description
GET	/api/activities	List all public activities
```

** Bookings (JWT Required)**
```
Method	Endpoint	Description
POST	/api/bookings	Book an activity (by activity ID)
GET	/api/bookings	Get current user's bookings
```
