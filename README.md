# Book-A-Doctor: Online Doctor Appointment Platform

This project, **Book-A-Doctor**, is developed as part of the Naan Mudhalvan Program (Course Code: NM1042) conducted for Tagore Engineering College (College Code: 4127). The platform is built using the MERN stack (MongoDB, Express, React, Node.js) and enables patients to book appointments with doctors, view available time slots, and access essential health services online.

---

## Project Team

**Team ID**: NM2024TMID02122

| Name                        | Register Number | Naan Mudhalvan ID                       |
|-----------------------------|-----------------|-----------------------------------------|
| **Udhaya Kumar A (Team Leader)** | 412721104055  | 07C25EBEE884965A2DC44C962D801574 |
| Saviour V                   | 412721104043    | F12B1328970305A802B4161C3354151F       |
| Gokul K                     | 412721104014    | 45F858E0100F234B3EA4C47E5996D407       |
| Gokul J                     | 412721104013    | 27BFF489E0B9F12829243F2D871BE1E3       |
| Ajay Y                      | 412721104003    | 531E5FF050FAEB29018458169E59F0A9       |

We are students from the Computer Science and Engineering (CSE) department, currently in our fourth year (7th semester).

---

## Project Description

**Project Name**: Book-A-Doctor Online Platform

The **Book-A-Doctor** platform allows patients to connect with doctors, schedule appointments, and manage health information through an intuitive web interface. Key features include:
- **Doctor Profiles**: View specialization, experience, and available time slots for each doctor.
- **Appointment Scheduling**: Book, reschedule, or cancel appointments.
- **User Profiles**: Manage patient and doctor profiles, including contact information and documents.

The application is developed using the MERN stack, ensuring fast response times and a reliable database system to handle user data.

---

## Steps to Run the Application Locally

Follow these steps to set up and run the application on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-a-doctor.git
```

# Book-A-Doctor Project Setup Guide

## 2. Navigate to the Cloned Repository

```bash
cd book-a-doctor
```

## 3. Configuration Settings

Rename the environment file in the client directory.

```bash
# Rename .env.local1 to .env.local in the client directory
mv client/.env.local1 client/.env.local
```

## 4. Setting up the Frontend

Open a new terminal in your code editor and run the following commands to install dependencies and start the frontend:

```bash
cd client
npm install   # Install the required packages
npm run dev   # Start the frontend
```

Open a browser and go to [http://localhost:5173](http://localhost:5173) to view the frontend.

## 5. Setting up the Backend

Open another terminal in your code editor and run these commands to set up and start the backend server:

```bash
cd server
npm install          # Install required backend packages
node server.js       # Start the backend (use `nodemon server.js` for automatic restarts)
```

The backend will start on PORT 5000 by default. You can change this in the `.env` file if needed.

---

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv

---

## Additional Information

For further assistance, please reach out to any of the team members listed above. Their GitHub profiles can be found on the collaborators list.
