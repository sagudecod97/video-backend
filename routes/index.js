const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

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
router.patch("/offline/video/:videoid", videoController.turnOnVideo);

module.exports = router;
