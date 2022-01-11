const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://whdgur4817:whdgur2422%40@boilerplate-shard-00-00.vvrdw.mongodb.net:27017,boilerplate-shard-00-01.vvrdw.mongodb.net:27017,boilerplate-shard-00-02.vvrdw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ug9q92-shard-0&authSource=admin&retryWrites=true&w=majority', {
    //useNewUrlParse : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})