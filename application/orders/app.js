const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
    res.json({ message: 'Orders endpoint' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Orders server running on port ${PORT}`));
