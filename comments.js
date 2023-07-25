// Create web server
// 1. Create a web server with Express
// 2. Create a route for /comments
// 3. Return all comments in the database
// 4. Start the web server

// 1. Create a web server with Express
const express = require('express');
const app = express();

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
    // 3. Return all comments in the database
    res.json([
        {
            username: 'treyhuffine',
            comment: 'first!'
        },
        {
            username: 'treyhuffine',
            comment: 'second!'
        }
    ]);
});

// 4. Start the web server
app.listen(4001, () => {
    console.log('Listening on port 4001');
});