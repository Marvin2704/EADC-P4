const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files like CSS (optional if using external files)
// app.use(express.static('public'));

// Root route with HTML and CSS
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Marvin</title>
            <style>
                body {
                    background-color: #e0f7fa;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                }
                h1 {
                    color: #006064;
                    font-size: 3em;
                }
            </style>
        </head>
        <body>
            <h1>Hello, Marvin!</h1>
        </body>
        </html>
    `);
});

// Home route with HTML and CSS
app.get('/home', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home Page</title>
            <style>
                body {
                    background-color: #fce4ec;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    text-align: center;
                    padding-top: 60px;
                }
                h2 {
                    color: #ad1457;
                    font-size: 2.5em;
                }
            </style>
        </head>
        <body>
            <h2>This is home page of Rutvij's EADC_Practical-4.</h2>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
