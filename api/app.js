const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcryptjs');
const req = require('express/lib/request');

const jwt = require('jsonwebtoken');
const JWT_SECRET = "jklaHSA&(hjhlh!*(&(*!&@jPOSjopoopajhsa8h9ASH))AH09h09hA90h"

const mongoURL = "mongodb+srv://hammstadann:06cWST6ppwjRbj7P@cluster0.btqu8y0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  require("./userDetails");

  const User = mongoose.model("UserInfo");
  app.post('/register', async(req, res) => {
    const {fname, lname, email, password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({email});

        if(oldUser){
            return res.send({ error: "User Exists" });
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({ status:"ok" })
    } catch (error){
        res.send({ status:"error" })
    }
});

app.post('/login-user', async(req, res) =>{
    const { email, password } = req.body;
    
    const user = await User.findOne({email});
    if (!user) {
        return res.json({ error: 'User not found.' });
    }
    if (await bcrypt.compare(password. user.password)){
        const token = jwt.sign({}, JWT_SECRET);

        if(res.status(201)){
            return res.json({ status: 'ok', data: token });            
        }
        else {
            return res.json({ error: 'error' });
        }
    }
    res.json({ status: 'error', error: 'Invalid Password'});

})

app.listen(5000,() => {
    console.log('Server is connected');
});

app.post('/post', async(req, res) => {
    console.log(req.body);
    const {data}=req.body;
});
