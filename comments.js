
// Create web server
const express = require('express');
const app = express();

// Create a path
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});