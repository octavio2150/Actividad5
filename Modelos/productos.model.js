const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true // `email` must be unique
    },
    password: { type: String, select: false },
    image: { type: Schema.Types.ObjectId, ref: 'StorageModel' },
});

const UserModel = mongoose.model('UserModel', User)
module.exports = UserModel


//ruta
const  User Model require("../models/UserModel")

// 
const createQuiz = async (req, res) => {
    try {
        const body = req.body
        const quiz = await QuizModel.create(body)
        res.send(quiz)
    } catch {
        res.json({msg:"Algo salio mal"})
    }
}
// 
res.json({msg:"Producto"})