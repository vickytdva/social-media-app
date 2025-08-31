# Social Media Full-Stack Application

## Project Overview
A complete social media platform built with React.js frontend and Node.js backend, featuring user authentication, posts, comments, likes, user profiles, and real-time interactions.

## 🛠️ Technology Stack

### Frontend
- **React.js 18** - Modern React with hooks
- **React Router v6** - Client-side routing
- **React Query (TanStack Query)** - Server state management
- **SCSS/Sass** - Advanced CSS preprocessing
- **Axios** - HTTP client for API calls

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
- **Foreign Key Constraints** - Data integrity
- **Indexed Queries** - Performance optimization

## �� Project Structure

## 🚀 Как да стартираш проекта

### 1. Клонирай репозиторията
```bash
git clone [url-то-ти]
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

##  Ако нещо не работи

### Портът е зает
```bash
lsof -i :3000
kill -9 [PID]
```

### Backend не работи
```bash
npm run server:dev
```

### Frontend не работи
```bash
npm start
```

## 📱 Какво можеш да правиш

1. **Регистрирай се** на `/register`
2. **Влез** на `/login`
3. **Създавай постове** с снимки
4. **Добавяй приятели**
5. **Пиши коментари**
6. **Харесвай постове**

## 🎯 Test Account
- **Username**: gracy
- **Password**: viki123
