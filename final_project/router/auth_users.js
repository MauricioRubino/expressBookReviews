const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
  // Filter the users array for any user with the same username
  let userswithsamename = users.filter((user) => {
    return user.username === username;
});
// Return true if any user with the same username is found, otherwise false
if (userswithsamename.length > 0) {
    return true;
} else {
    return false;
}

}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
// Authenticate user
if (authenticatedUser(username, password)) {
  // Generate JWT access token
  let accessToken = jwt.sign({
      data: password
  }, 'access', { expiresIn: 60 * 60 });

  // Store access token and username in session
  req.session.authorization = {
      accessToken, username
  }
  return res.status(200).send("User successfully logged in");
} else {
  return res.status(208).json({ message: "Invalid Login. Check username and password" });
}
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  // Check if username or password is missing
  if (!username || !password) {
      return res.status(404).json({ message: "Error logging in" });
  }

  // Authenticate user
  if (authenticatedUser(username, password)) {
      // Generate JWT access token
      let accessToken = jwt.sign({
          data: password
      }, 'access', { expiresIn: 60 * 60 });

      // Store access token and username in session
      req.session.authorization = {
          accessToken, username
      }
      return res.status(200).send("User successfully logged in");
  } else {
      return res.status(208).json({ message: "Invalid Login. Check username and password" });
  }
});

// Register a new user
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if both username and password are provided
  if (username && password) {
      // Check if the user does not already exist
      if (!doesExist(username)) {
          // Add the new user to the users array
          users.push({"username": username, "password": password});
          return res.status(200).json({message: "User successfully registered. Now you can login"});
      } else {
          return res.status(404).json({message: "User already exists!"});
      }
  }
  // Return error if username or password is missing
  return res.status(404).json({message: "Unable to register user."});
});


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  if (!review) {
    return res.status(400).json({ message: "La reseña no puede estar vacía." });
  }

  // Verificar que el libro exista en la "base de datos"
  if (!books[isbn]) {
    return res.status(404).json({ message: `No se encontró ningún libro con ISBN ${isbn}.` });
  }

  // Agregar o actualizar la reseña del usuario
  if (!books[isbn].reviews) {
    books[isbn].reviews = {}; // Crear el objeto de reseñas si no existe
  }

  books[isbn].reviews[username] = review;

  return res.status(200).json({
    message: "Reseña agregada o actualizada exitosamente.",
    reviews: books[isbn].reviews
  });
  
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
