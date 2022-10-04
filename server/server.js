const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const app = express()
app.use(cors());
app.use(express.json())

const posts = [
    {
        user_name: 'Denis',
        title: 'Post 1'
    },
    {
        user_name: 'Yuri',
        title: 'Post 2'
    },
]

app.get('/post',(req,res)=>{
    res.json(posts)
})

app.post('/post',async (req,res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password , salt)
        const user = {email :req.body.email , password: hashedPassword}
        console.log(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})






app.listen(3030)