const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://madhav:madhavmongodbDatabase@coursesappdatabase.ook1ijo.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports={todo};