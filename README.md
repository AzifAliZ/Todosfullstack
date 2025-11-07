# 📝 Full Stack TODO App (React + Django)

A simple full-stack **Todo List** application built using **React** for the frontend and **Django REST Framework (DRF)** for the backend.

---

## 🚀 Features

- ➕ Add new tasks  
- ✅ Toggle (mark as completed / not completed)  
- ❌ Delete tasks  
- 🔄 Auto-refresh after each action  
- 🌐 REST API built with Django REST Framework  

---

## 🧱 Tech Stack

**Frontend:**
- React.js
- Axios (for API calls)
- CSS (simple responsive design)

**Backend:**
- Django
- Django REST Framework
- SQLite (default DB)

---

## ⚙️ Project Setup
Create a virtual environment and activate it
python -m venv venv
venv\Scripts\activate


## 🖥️ Backend (Django)

1. Navigate to backend folder  
Install dependencies
pip install django djangorestframework django-cors-headers



Run migrations
python manage.py migrate



Start the server
python manage.py runserver

Server runs at http://127.0.0.1:8000



## 💻 Frontend (React)


Open a new terminal and navigate to frontend folder
cd todo_frontend



Install dependencies
npm install



Start the development server
npm start

App runs at http://localhost:3001 (or 3000)



## 🔗 API Endpoints
MethodEndpointDescriptionGET/api/todos/Get all todosPOST/api/todos/Create a new todoPUT/api/todos/<id>/Update / toggle todoDELETE/api/todos/<id>/Delete a todo

## 🖼️ Screenshots
https://github.com/AzifAliZ/Todosfullstack/blob/main/Screenshot%20(221).png

## 📦 Folder Structure


todo-fullstack/
│
├── todo_backend/          # Django Backend
│   ├── todo/              # Todo App
│   ├── manage.py
│   └── db.sqlite3
│
├── todo_frontend/         # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md


## ✨ Future Improvements


User authentication (login/register)


Task due dates & filtering


Deploy to Render / Vercel



## 👨‍💻 Author
Azif Ali Z
🌐 GitHub
✉️ azifalizakir@gmail.com

## ⭐ If you like this project, don’t forget to star the repo!


