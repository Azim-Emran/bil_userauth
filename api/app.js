const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcryptjs');

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

app.listen(5000,() => {
    console.log('Server is connected');
});

app.post('/post', async(req, res) => {
    console.log(req.body);
    const {data}=req.body;
});
