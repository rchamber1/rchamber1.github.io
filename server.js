// Node.js & Express server backend
// Firebase database (to be added)
//
// Run npm install before starting server
//

const express = require('express');
const server = express();

server.use(express.static('static_files'));

server.listen(3000, () => {
  console.log('Starting server at http://localhost:3000/');
});
