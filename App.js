const express = require("express");
const bodyParser = require("body-parser");
const { Video } = require("./Video");
const cors = require("cors"); //Permite que cualquier Ip pueda realizar consultas a la API.
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());//Si necesito que solo una IP pueda consumir la API, la pongo dentro de cors(), sino cualquier IP puede.

//Create a New Video
app.post("/api/v1/create/video",(req,res)=>{
    const { name,category,description,url,online } = req.body;
    const newVideo = Video({
        name,
        category,
        description,
        url,
        online
    })
    newVideo.save((err,video)=>{
        if(!err){
            res.status(201).send(video);
        }else{
            res.status(409).send(err);
        }
    })
})

//Get a Video
app.get("/api/v1/get/video/:videoid",(req,res)=>{
    const { videoid } = req.params;
    Video.findById(videoid)
    .exec()
    .then((video)=>{
        res.status(200).send(video);
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
})

//Get ALL Videos
app.get("/api/v1/get/videos",(req,res)=>{
    Video.find()
    .exec()
    .then((videos)=>{
        res.status(200).send(videos);
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
})

//Updating a Video
app.put("/api/v1/update/video/:videoid", (req,res)=>{
    const { videoid } = req.params;
    Video.findByIdAndUpdate(videoid, {$set: req.body}, {new: true})
    .exec()
    .then((video)=>{
        res.status(200).send(video)
    })
    .catch((err)=>{
        res.status(409).send(err);
    })
})

//Deleting a Video
app.delete("/api/v1/delete/video/:videoid",(req,res)=>{
    const { videoid } = req.params;
    Video.findByIdAndDelete(videoid)
    .exec()
    .then((video)=>{
        res.status(200).send(
            { message : `The video with id ${videoid} has been eliminated`}
        )
    })
    .catch((err)=>{
        res.status(409).send(err);
    })
})

//Setting a Video Offline
app.patch("/api/v1/offline/video/:videoid",(req,res)=>{
    const { videoid } = req.params;
    Video.findByIdAndUpdate(videoid, { $set: { online: false}}, { new: true })
    .exec()
    .then((video)=>{
        res.status(200).send(video)
    })
    .catch((err)=>{
        res.status(409).send(err)
    })
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})

