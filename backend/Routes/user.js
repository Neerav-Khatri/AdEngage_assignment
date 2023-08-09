const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { userModel } = require("../Model/userModel");

// Register

userRouter.post("/register", async(req, res) => {
    const { name, email, password } = req.body;
    const data = await userModel.find({ email });

    if (data.length>0){
        res.status(400).send({ "message" : "User already exist, please login" });
    } else {
        const user = new userModel({ name, email, password });
        await user.save();
        res.status(200).send({ "message" : "User has been register" });
    }
});

// Login

userRouter.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const data = await userModel.find({ email });

    if (data.length>0){
        res.status(200).send({ "message" : "Login succesful", "token" : jwt.sign({ data: "Authorize" }, "AadEngage") });
    } else {
        res.status(400).send({ "message" : "Wrong Credentials" });
    }
});

module.exports = { userRouter };