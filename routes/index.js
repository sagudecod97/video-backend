const express = require('express')
const router = express.Router()

//Create a New Video
router.post("/api/v1/create/video",(req,res)=>{
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
router.get("/api/v1/get/video/:videoid",(req,res)=>{
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
router.get("/api/v1/get/videos",(req,res)=>{
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
router.put("/api/v1/update/video/:videoid", (req,res)=>{
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
router.delete("/api/v1/delete/video/:videoid",(req,res)=>{
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
router.patch("/api/v1/offline/video/:videoid",(req,res)=>{
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

module.exports = router