const express = require("express");
const dataRouter = express.Router();
const { dataModel } = require("../Model/dataModel");
const multer = require("multer");
const upload = multer({ dest : 'uploads/' });

// GET request - make a get request to the /data route along with jwt token in headers to get all the images data from the database.

dataRouter.get("/", async(req, res) => {
    const data = await dataModel.find({});
    if (data){
        res.status(200).send(data);
    } else {
        res.status(400).send({ "message" : "Service error" });
    }
});

// POST request - make a post request to the /data/add route along with jwt token in headers to add a new image data in the database.

dataRouter.post("/add", upload.single('image'), async(req, res) => {
    const { title, description, keywords, date } = req.body;
    const imgUrl = req.file.path;

    if (!title || !description || !keywords || !date || !imgUrl){
        res.status(400).send({ "message" : "Kindly fill all the required fields." });
    }

    try {
        const newImage = new dataModel({ title, description, keywords, date, imgUrl });
        await newImage.save();
        res.status(200).send({ "message" : "Image has been added." }); 
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = { dataRouter }; 