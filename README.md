Medlist - Your Complete Health Companion


<strong>A full-stack web application designed to be a one-stop solution for all your healthcare needs.</strong>
<br />
From finding the right doctor to ordering medicines and booking lab tests, Medlist simplifies healthcare management for everyone.
</p>

✨ Core Features

Medlist is packed with features to provide a seamless and comprehensive healthcare experience:

👩‍⚕️ Doctor & Appointments

Advanced Search: Find doctors by specialty, location, experience, and more.

Detailed Profiles: View doctor's experience, fees, languages spoken, and availability.

Seamless Booking: Select a time slot and book an appointment directly from the portal.

Online Consultations: Get a Google Meet link for your online appointments.

💊 E-Commerce for Medicines

Extensive Catalog: Search and browse a wide range of medicines.

Shopping Cart: Add products to a cart and manage quantities.

Secure Checkout: A simulated payment process with a dummy QR code for a realistic experience.

Order History: View past medicine orders directly from your profile.

🔬 Lab Tests & Health Camps

Book Lab Tests: Easily book appointments for various lab tests.

Health Camp Portal: View and register for upcoming health camps in the community.

👤 User & Profile Management

Secure Authentication: User registration and login functionality.

Comprehensive Dashboard: A dedicated profile page to view and manage appointments, orders, and reports.

AI Chatbot ("Medisa"): An integrated AI assistant powered by the Google Gemini API to answer general health queries.

🔔 Automated Notifications

Real-time Email Alerts: Receive professional, beautifully formatted emails for:

Account Registration & Login Security Alerts

Doctor Appointment Confirmations (with Google Meet links)

Medicine Order Receipts

Membership Subscriptions

Health Camp & Lab Test Registrations

🛠️ Tech Stack

This project is built with a modern MERN-like stack:

Frontend: Next.js (React Framework)

Backend: Node.js with Express.js

Database: MongoDB with Mongoose for object modeling

Email Service: Nodemailer with Gmail for automated notifications

AI Integration: Google Gemini API for the chatbot functionality

🚀 Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js (v18 or later recommended)

npm (comes with Node.js)

MongoDB (You can use a local instance or a cloud service like MongoDB Atlas)

Installation & Setup

Clone the repository:

git clone [https://github.com/your-username/medlist-project.git](https://github.com/your-username/medlist-project.git)
cd medlist-project


Install Backend Dependencies:

npm install


Install Frontend Dependencies:

cd src
npm install
cd ..


Set Up Environment Variables:
Create a .env file in the root directory and add the following variables.

# --- Database ---
MONGO_URI=your_mongodb_connection_string

# --- Server Port ---
PORT=5000

# --- Google Gemini API Key ---
GEMINI_API_KEY=your_gemini_api_key

# --- Nodemailer (Gmail) ---
# Your Gmail address
EMAIL_USER=your-email@gmail.com
# Your 16-character Google App Password
EMAIL_PASS=your_google_app_password


Seed the Database (Optional but Recommended):
This project comes with a seeder script to populate your database with initial data (doctors, medicines, etc.).

node seeder


To destroy all data, run:

node seeder -d


Running the Application

Start the Backend Server:
From the root directory, run:

npm run server


The backend will be running on http://localhost:5000.

Start the Frontend Development Server:
In a new terminal, navigate to the src folder and run:

cd src
npm run dev


Open http://localhost:3000 to view it in the browser.

📂 Project Structure

The project is organized into a frontend (src) and a backend (root directory) structure.

/
├── config/             # Database connection
├── controllers/        # Backend logic for each feature
├── data/               # Seed data
├── models/             # Mongoose schemas
├── routes/             # API endpoints
├── utils/              # Utility functions (e.g., sendEmail)
├── src/                # NEXT.JS FRONTEND
│   ├── app/
│   │   ├── (pages)/    # Next.js App Router pages
│   │   ├── components/ # Reusable React components
│   │   └── globals.css
├── .env                # Environment variables (you must create this)
├── server.js           # Main backend server file
└── package.json


This clear separation makes the codebase easy to navigate and maintain.