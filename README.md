# MeetX Backend - Activity Booking API

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
git clone https://github.com/Sankalp-Space/MeetX-backend
cd meetx-backend
```
2. **Install dependencies**
```
npm install

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
Method	Endpoint         	Description
GET	   /meetx/activities	List all public activities
POST   /meetx/activities	add a  public activities
```

** Bookings (JWT Required)**
```
Method	Endpoint	     Description
POST	/meetx/bookings	 Book an activity (by activity ID)
GET	/meetx/bookings	  Get current user's bookings
```

## Deployed URL

Try it live: **[Deployemnt URL](https://imagify1-13gr.onrender.com)**

---
## Postman APIs Collection

Check it: **[Postman APIs Collections](https://www.postman.com/api-testing-7092/workspace/mangojelly/collection/36163184-def154d5-4865-40e4-a498-d0db90eed3c0?action=share&creator=36163184)**

---
