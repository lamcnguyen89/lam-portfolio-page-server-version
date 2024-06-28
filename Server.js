// Create a simple Express Server for handling Web Requests
const express = require('express');

const app = express();

// Create a single endpoint to test if the server works
app.get('/', (req,res) => res.send('API Running'));

// Take app variable and listen on a port
const PORT = process.env.PORT || 666;

app.listen(PORT, () => console.log(`The Server of Darkness started on Port ${PORT}`));

