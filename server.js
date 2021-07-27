const app = require('./index')

const timeout = 2000;

app.get('/', (req, res) => {
    setTimeout(function() {
        res.send('Time: ' + timeout + ' milisegundos');
    }, timeout)
  })

app.listen(3000, (err) => {
    if (err) throw err
    console.log('Server running in http://localhost:3000 with timeout: ' + timeout + ' milisegundos')
})