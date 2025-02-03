const express = require('express');
require('./connect');
const FromSchema = require('./formSchema');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.post('/save' ,async (req , res)=>{
    const data = FromSchema(req.body);
    const result = await data.save();

    console.log(data);
    res.send(result);
})

app.get('/fetch' , async(req , res)=>{
    const data = await FromSchema.find();
    res.send(data);
})

const PORT = process.env.PORT;
app.listen(PORT);