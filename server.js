// Express server setup
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'fpac' directory
app.use(express.static(path.join(__dirname, './')));

// Redirect root URL to the documentation homepage
app.get('/', (req, res) => {
    res.redirect('/fpac-website/pages/home.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('This page cannot be located.');
});