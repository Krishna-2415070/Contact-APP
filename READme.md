# Contact Manager Application

A full-stack Contact Management System built using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, and **EJS**. This application allows users to create, view, update, and delete contacts through a clean and responsive web interface.

## 🚀 Live Demo

**Deployed Application:**
https://contact-app-5qav.onrender.com/

---

## ✨ Features

* Add new contacts
* View all saved contacts
* View individual contact details
* Update existing contacts
* Delete contacts
* Persistent cloud database using MongoDB Atlas
* Server-side rendering using EJS
* Responsive and user-friendly interface
* Deployed on Render

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS (Embedded JavaScript Templates)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Render

---

## 📂 Project Structure

```text
Contact-APP/
│
├── models/
│   └── contacts.model.js
│
├── public/
│   ├── bootstrap.min.css
│   └── custom.css
│
├── views/
│   ├── partials/
│   ├── add-contact.ejs
│   ├── home.ejs
│   ├── show-contact.ejs
│   └── update-contact.ejs
│
├── index.js
├── package.json
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Krishna-2415070/Contact-APP.git
cd Contact-APP
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Run the Application

```bash
npm start
```

The application will run on:

```text
http://localhost:3001
```

---

## 📌 CRUD Operations Implemented

### Create

Add a new contact to the database.

### Read

View all contacts or a specific contact.

### Update

Modify existing contact details.

### Delete

Remove contacts from the database.

---

## 🌐 Database Integration

The application uses **MongoDB Atlas** as a cloud-hosted database and **Mongoose** for schema modeling and database operations.

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Express.js routing and middleware
* Server-side rendering using EJS
* MongoDB Atlas configuration
* Mongoose CRUD operations
* Environment variables and security practices
* Git and GitHub workflow
* Cloud deployment using Render
* Full-stack application development

---

## 👨‍💻 Author

**Krishna Mahato**

* NIT Silchar
* Electronics and Instrumentation Engineering
* Interested in Backend Development, Web Technologies, and Data Structures & Algorithms

---

## 📜 License

This project is created for learning and educational purposes.
