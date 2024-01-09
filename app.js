const express = require('express');
const app = express();
const db = require('./connection');
const { json } = require('body-parser');
const { error } = require('console');

const postModel = require('./postModel')
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', async(req, res)=>{
    const{title, content} = req.body;

    try{
        const newPost = await postModel.create({title, content});
        res.json(newPost)
        }catch (err){
            res.status(500).send(error)
    }
})



app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
