const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json({ message: 'Users endpoint' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Users server running on port ${PORT}`));
