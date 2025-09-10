# 📚 Book Library RESTful API

A simple RESTful API built with **Express.js** for managing a collection of books.  
This project demonstrates CRUD operations (Create, Read, Update, Delete) on a book resource with JSON responses and basic input validation.

---

## 🚀 Features

- **Create** new books with properties:
  - `title`
  - `author`
  - `genre`
  - `publication year`
  - `ISBN`
- **Read**:
  - Get all books
  - Get a single book by ID
- **Update** book details
- **Delete** books
- **Basic validation** (e.g., title/author required, year must be a number)
- **In-memory storage** using an array (easy to extend with a JSON file or database)

---

## 🛠️ Technology Stack

- **Backend Framework:** [Express.js](https://expressjs.com/)
- **Runtime:** Node.js
- **Middleware:**
  - `express.json()` for parsing JSON requests
  - [method-override](https://www.npmjs.com/package/method-override) (optional, if using EJS forms)
- **Development Tools:** Nodemon (for auto-restart during development)

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-library-api.git
cd book-library-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server
```bash
npm start
```
or (for development with auto-restart):
```bash
nodemon index.js
```

### 4. Access API
Server runs by default at **`http://localhost:8080`**

---

## 📖 API Documentation

### Base URL
```
http://localhost:8080
```

### Endpoints

| Method | Endpoint          | Description             | Request Body (JSON) |
|-------|------------------|-----------------------|--------------------|
| GET   | `/books`         | Get all books         | - |
| GET   | `/books/:id`     | Get book by ID        | - |
| POST  | `/books`         | Add a new book        | `{ "title": "...", "author": "...", "genre": "...", "year": 2024, "isbn": "..." }` |
| PUT   | `/books/:id`     | Update existing book  | `{ "title": "...", "author": "...", "genre": "...", "year": 2024, "isbn": "..." }` |
| DELETE| `/books/:id`     | Delete a book         | - |

### Example POST Request
```json
POST /books
Content-Type: application/json

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-Help",
  "year": 2018,
  "isbn": "9780735211292"
}
```

### Example Response
```json
{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-Help",
  "year": 2018,
  "isbn": "9780735211292"
}
```

---

## ⚡ Challenges Faced & Solutions

### 1. **Handling In-Memory Data**
- **Challenge:** Keeping track of books with unique IDs while using a simple array.
- **Solution:** Used `Date.now()` or incremental counters to generate unique IDs for each book.

### 2. **Basic Validation**
- **Challenge:** Avoiding insertion of incomplete or invalid book data.
- **Solution:** Added validation checks for required fields and correct data types before adding/updating a book.

### 3. **PUT vs PATCH vs POST Confusion**
- **Challenge:** Understanding when to use which method.
- **Solution:** Chose **PUT** for full updates (replacing all fields) and **POST** for creation to follow REST best practices.

### 4. **Method Override for Forms**
- **Challenge:** HTML forms only support GET & POST.
- **Solution:** Installed and used `method-override` so we could send PUT & DELETE requests from forms when building EJS pages.

---

## 📌 Future Improvements

- Connect to a **real database** (MongoDB/MySQL)
- Add **search/filtering** (by genre, author, year)
- Implement **authentication & authorization**
- Add **pagination** for large book collections
- Write **unit tests** with Jest or Mocha

---

