const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let books = [
  {
    id: uuidv4(),
    title: "Harry Potter",
    author: "JK Rowling",
    genre: "Magic",
    publicationYear: "2005",
    ISBN: "9788869183157",
  },
];

app.get("/", (req, res) => {
  res.send("server working well");
});

app.get("/books", (req, res) => {
  res.render("index.ejs", { books });
});

app.get("/books/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/books", (req, res) => {
  let { title, author, genre, year, isbn } = req.body;
  let id = uuidv4();
  books.push({ id, title, author, genre, year, isbn });
  res.redirect("/books");
});

app.get("/books/:id", (req, res) => {
  let { id } = req.params;
  let book = books.find((p) => id == p.id);
  res.render("show.ejs", { book });
});

app.patch("/books/:id", (req, res) => {
  let { id } = req.params;
  let newTitle = req.body.title;
  let newAuthor = req.body.author;
  let newGenre = req.body.genre;
  let newYear = req.body.year;
  let newISBN = req.body.isbn;

  let book = books.find((p) => id == p.id);

  if (book) {
    book.title = newTitle;
    book.author = newAuthor;
    book.genre = newGenre;
    book.year = newYear;
    book.isbn = newISBN;
  }
  res.redirect("/books");
});

app.get("/books/:id/edit", (req, res) => {
  let { id } = req.params;
  let book = books.find((p) => id == p.id);
  res.render("edit.ejs");
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  books = books.filter((p) => id == p.id);
  res.redirect("/books");
});

app.listen(8080, () => {
  console.log("listening to port : 8080");
});
