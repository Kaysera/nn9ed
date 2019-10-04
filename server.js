const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
    console.log('hey')
    console.log(req.query)
    res.send('Holi')
})

app.listen(port, function () {
    console.log('[+] Listening at port ' + port)
});