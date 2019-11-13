const http = require('http')
const PORT = process.env.PORT || 3000
const PRAISES = [
    'Paul Gilbert is awesome',
    'Paul Gilbert is sexy',
    'Paul Gilbert is amazing',
    'Paul Gilbert is handsome',
    'Paul Gilbert is godlike',
    'Paul Gilbert is pretty',
    'Paul Gilbert is cute',
    'Paul Gilbert is funny',
    'Paul Gilbert is kind',
    'Paul Gilbert is gentle',
    'Paul Gilbert is ROCK AND ROLL',
    'Paul Gilbert is badass'
]
http.createServer(function(req, res) {
    if (req.url !== '/') {
        res.statusCode = 404
        res.end()
        return
    }
    const randomPraise = PRAISES[Math.floor(Math.random() * PRAISES.length)]
    res.end(randomPraise)
}).listen(PORT, err => {
    if (err) {
        throw err
    }
    console.log(`server is listening on ${PORT}`)
})