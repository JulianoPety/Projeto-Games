const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

app.use(cors())
app.use(express.json());

app.get('/users', (req, res) => {
    res.send('Ok, deu bom');
});

app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});





