const express = require("express");
const { createTodo, updateTodo } = require("./types");
// const todo = require("./db");
const app = express();
app.use(express.json());


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(403).send({
            msg: "Failure! Data not in the right format."
        })
        return;
    }
        // put data in mongoDB //
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.send({
        msg: "Todo created."
    })
    
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    })

})


app.put("/completed", async function(req, res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(403).send({
            msg: "request could not be completed"
        })
    }
    await todo.update({
        _id: req.body.id,
    },{
        completed: true
    })

    res.json({
        msg: "todo marked as completed."
    })
})


// app.listen(3000).then(console.log("server connected..."));
app.listen(3000,()=>{
    console.log("Server Connected...");
})















