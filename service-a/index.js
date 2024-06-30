const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello from Service A!');
});

app.get('/call-service-b', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002');
        res.send(`Service B says: ${response.data}`);
    } catch (error) {
        res.status(500).send('Error calling Service B');
    }
});

app.listen(port, () => {
    console.log(`Service A listening at http://localhost:${port}`);
});
