# Habit Tracker Application - Backend

This is the backend for the Habit Tracker Application built using Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Register, login, forgot password, and reset password (JWT-based authentication).
- **Habit Management**: Create, update, delete, and retrieve habits for users.
- **Admin Controls**: Admin users can manage habit templates and view users’ habit stats.
- **Notifications**: Daily habit reminders using a cron job.
- **Profile Management**: Users can edit their profile and set motivational messages.

- API Endpoints
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login user.
POST /api/auth/forgot-password: Send reset password email.
POST /api/auth/reset-password: Reset user password.
POST /api/habits: Create a new habit (requires authentication).
GET /api/habits: Get user habits (requires authentication).
PUT /api/habits/:id: Update a habit (requires authentication).
DELETE /api/habits/:id: Delete a habit (requires authentication).

Technologies Used

Node.js: Backend runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database.
Mongoose: MongoDB object modeling for Node.js.
JWT: Secure user authentication.
Cron: Job scheduler for notifications.
Nodemailer: Sending email notifications for password reset.
