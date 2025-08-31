# Social Media Full-Stack Application

## Project Overview
A complete social media platform built with React.js frontend and Node.js backend, featuring user authentication, posts, comments, likes, user profiles, and real-time interactions.

## 🛠️ Technology Stack

### Frontend
- React.js 18 - Modern React with hooks
- React Router v6 - Client-side routing
- React Query (TanStack Query) - Server state management
- SCSS/Sass - Advanced CSS preprocessing
- Axios - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL** - Relational database
- **JWT** - JSON Web Token authentication
- **Multer** - File upload handling
- **Cookie-parser** - Cookie management
- **Bcrypt** - Password hashing

### Database
- **MySQL 9.3.0** - Primary database

## �� Project Structure

## 🚀 Как да стартираш проекта

### 1. Клонирай репозиторията
```bash
git clone https://github.com/vickytdva/social-media-app.git
cd socialmediafullstuck-main-2
```

### 2. Инсталирай зависимостите
```bash
npm install
```

### 3. Стартирай MySQL
```bash
mysql -u root -p
# Влез с паролата си
```

### 4. Създай базата данни
```sql
CREATE DATABASE socialmedia;
USE socialmedia;
# Копирай и пусни SQL командите от горе
```

### 5. Промени connect.js
```javascript
// Промени username и password с твоите MySQL данни
user: "viktoriat",
password: "zdravei123",
```

### 6. Стартирай приложението
```bash
npm run dev
```

### 7. Отвори в браузъра
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:8800`


## 📱 Какво можеш да правиш

1. Регистрирай се на `/register`
2. Влез на `/login`
3. Създавай постове с снимки
4. Добавяй приятели
5. Пиши коментари
6. Харесвай постове

## 🎯 Test Account (с този акаунт може да се види пробно как работи)
- **Username**: gracy
- **Password**: viki123
<img width="1470" height="956" alt="Screenshot 2025-08-31 at 6 18 25 PM" src="https://github.com/user-attachments/assets/6fe8ce16-1f4b-42c7-a151-f933d408185d" />
<img width="1470" height="956" alt="Screenshot 2025-08-31 at 6 18 18 PM" src="https://github.com/user-attachments/assets/f2a16ea4-fe79-4c00-b219-f3b081f44ecb" />
<img width="1470" height="956" alt="Screenshot 2025-08-31 at 6 18 10 PM" src="https://github.com/user-attachments/assets/582ce9ae-fa39-453a-8a8c-84c9ac83ebce" />
