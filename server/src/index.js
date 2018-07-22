const express = require('express')
const app = express()

const PORT = process.env.NODE_PORT || 8080

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))