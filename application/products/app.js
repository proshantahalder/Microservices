const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.json({ message: 'Products endpoint' });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Products server running on port ${PORT}`));
