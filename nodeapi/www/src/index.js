const os = require('os')
const express = require('express')
const redis = require('redis')

const port = process.env.PORT || 80
const hostname = os.hostname()
const app = express()
const db = redis.createClient(process.env.REDIS_PORT_6379_TCP_PORT, process.env.REDIS_PORT_6379_TCP_ADDR)
db.on('ready', () => db.set('count', 0))

app.get('/', (req, res) => res.end(`Hello from host ${hostname}`))
app.get('/env', (req, res) => res.json(process.env))
app.get('/count', (req, res) => {
  db.incr('count', (err, count) => {
    res.json({ count })
    
  })
})

app.listen(port, () => console.log(`Server running on port ${port} (host=${hostname})`))