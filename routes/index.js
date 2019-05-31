const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const authorController = require("../controllers/authorController")
// VIDEO CRUD // // VIDEO CRUD // // VIDEO CRUD //
// VIDEO CRUD // // VIDEO CRUD // // VIDEO CRUD //
// VIDEO CRUD // // VIDEO CRUD // // VIDEO CRUD //

router.post("/create/video", videoController.createVideo);
router.get("/get/video/:videoid", videoController.getVideo);
router.get("/get/videos", videoController.getVideos);
router.get("/get/online/videos", videoController.getOnlineVideos);
router.get("/get/offline/videos", videoController.getOfflineVideos);
router.put("/update/video/:videoid", videoController.modifyVideo);
router.delete("/delete/video/:videoid", videoController.deleteVideo);
router.patch("/online/video/:videoid", videoController.turnOnVideo);

// AUTHOR CRUD // AUTHOR CRUD // AUTHOR CRUD //
// AUTHOR CRUD // AUTHOR CRUD // AUTHOR CRUD // 
// AUTHOR CRUD // AUTHOR CRUD // AUTHOR CRUD // 

router.post("/create/author", authorController.createAuthor);
router.get("/get/author/:authorid", authorController.getAuthor);
router.put("/update/autor/:authorid", authorController.modifyAuthor);
router.delete("/delete/author/:authorid", authorController.deleteAuthor);
module.exports = router;
