const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const habitRoutes = require('./routes/habitRoutes');
const cors = require('cors');
const helmet = require('helmet');
const cron = require('node-cron');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

const sendDailyReminders = () => {
    // Logic to fetch users and their habits from the database
    // and send notifications (e.g., email, push notification, etc.)

    console.log('Sending daily reminders to users...');
    
    // Example: Fetch users and send reminders
    // User.find({}).then(users => {
    //     users.forEach(user => {
    //         // Logic to send reminder (e.g., email)
    //         console.log(`Reminder sent to ${user.email}`);
    //     });
    // });
};

// Schedule a cron job to run every day at 8:00 AM
cron.schedule('0 8 * * *', () => {
    console.log('Running daily cron job to send reminders');
    sendDailyReminders();
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
