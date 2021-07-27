const express = require('express')

const app = express()

const port = process.env.PORT;

const timeout = 2000;

app.get('/', (req, res) => {
    setTimeout(function() {
        res.send('Time: ' + timeout + ' milisegundos');
    }, timeout)
  })

app.listen(port, (err) => {
    if (err) throw err
    console.log('Server running in http://localhost:' + port + ' with timeout: ' + timeout + ' milisegundos')
})