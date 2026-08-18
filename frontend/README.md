# Real-Time Chat Application

A full-stack MERN chat application with real-time messaging powered by Socket.io.

## Features

- User authentication (signup/login) with JWT
- Real-time one-on-one messaging via Socket.io
- Online/offline user status indicators
- Auto-generated profile avatars based on username and gender
- Search users by name
- Responsive UI built with Tailwind CSS and DaisyUI

## Tech Stack

**Frontend:** React, Redux Toolkit, Tailwind CSS, DaisyUI, Axios, Socket.io-client
**Backend:** Node.js, Express.js, MongoDB, Mongoose, Socket.io, bcrypt, JWT

## Project Structure

```
/frontend   -> React application (this folder)
/backend    -> Express server, API routes, MongoDB models, Socket.io setup
```

## Getting Started

### Prerequisites

- Node.js installed
- A MongoDB connection string (local or MongoDB Atlas)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run the backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically on changes.

## Available Scripts (Frontend)

### `npm start`
Runs the app in development mode.

### `npm run build`
Builds the app for production into the `build` folder, minified and optimized for deployment.

### `npm test`
Launches the test runner in interactive watch mode.

## Deployment

- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render
- **Database:** MongoDB Atlas

Make sure to update the `BASE_URL` in the frontend to point to your deployed backend URL, and configure CORS on the backend to allow requests from your deployed frontend domain.

## Author

Harshita Himani