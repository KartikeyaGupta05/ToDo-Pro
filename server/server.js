const http = require("http"); // Import the HTTP module
const app = require("./app"); // Import the Express application from app.js
const port = process.env.PORT || 3000; // Define the port number for the server

const server = http.createServer(app); // Create an HTTP server using the Express application

server.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log a message when the server starts
}); // Start the server and listen on the specified port