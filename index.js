const express = require('express')
require('dotenv').config()

const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter' ,(req ,res)=>{
res.send("ashish")
})

app.get('/login' ,(req,res)=>{
    res.send(`<h1>please login our channel</h1>`)
})

app.get('/youtube',(req,res)=>{
    res.send("<h1>ak tech</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})