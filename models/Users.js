const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        tring:true,//space(=빈칸)를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,//굳이 중괄호를 사용하지 않아도 됨
    token: {
        type: String
    },
    tokenExp: {//토큰 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User };