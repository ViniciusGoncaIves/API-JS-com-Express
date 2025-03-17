const express = require('express');
const app = express();
const PORT = 8001;
app.use(express.json());

/*app.get('/' , (req, res) => {
    return res.send('OLÁ MUNDO!');
});*/


app.get('/' , (req, res) => {
    const hello = {
        message: "OLÁ MUNDO!"
    }
    return res.json(hello);
});


require('./routes')(app);

app.listen(PORT, () =>  {
    console.log(`API rodando na porta ${PORT}`);
});

