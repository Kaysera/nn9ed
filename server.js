const express = require('express');

const app = express();
const port = 80;

app.get('/patata', (req, res) => {
    res.send('Hola')
})

app.listen(port, function () {
    console.log('[+] Listening at port ' + port)
});