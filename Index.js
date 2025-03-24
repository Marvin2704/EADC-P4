const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 
 
// Root route 
app.get('/', (req, res) => { 
    res.send('Hello, Rutvij!'); 
}); 
 
// Home route 
app.get('/home', (req, res) => { 
    res.send("This is home page of Rutvij's EADC_Practical-4."); 
}); 
 
// Start the server 
app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`); 
}); 