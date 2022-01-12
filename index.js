const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key')
const { User } = require('./models/Users');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    //useNewUrlParse : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 123')
})

app.post('/register', (req,res) => {

  //회원 가입 할 때 필요한 정보들을 Client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다. 즉, 이 스크립트에서는 우리가 Users에서 가져온 정보들을 데이터 베이스에 넣어주는 것
  //req.body안에 id, pw와 같은 정보들이 있어서 


  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})