const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
   // Convertir el objeto de libros a una cadena JSON con formato
   const booksJson = JSON.stringify(books, null, 2); // El `2` agrega sangría para que sea más legible

   // Enviar la lista de libros como respuesta
   res.status(200).send(booksJson)
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbnJson = JSON.stringify(isbn, null, 2);
  res.status(200).send(isbnJson)
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const detailsJson = JSON.stringify(details, null, 2);
  res.status(200).send(detailsJson)
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const titleJson = JSON.stringify(title, null, 2);
  res.status(200).send(titleJson)
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const reviewJson = JSON.stringify(review, null, 2);
  res.status(200).send(reviewJson)
  return res.status(300).json({message: "Yet to be implemented"});

});

module.exports.general = public_users;
