const express = require('express');
const math = require('mathjs');
const path = require('path');

const app = express();
app.use(express.json());

// Serve math.html as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'math.html'));
});

// Endpoint for calculating algebraic expressions
app.post('/calculate', (req, res) => {
    const expression = req.body.expression;
    try {
        const result = math.evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
