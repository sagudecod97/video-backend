const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const authorController = require("../controllers/authorController");
const userController = require('../controllers/userController');
const bookController = require("../controllers/bookController");
const { createUserValidator, validateToken, isEmailExist } = require('../middlewares/validations');

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
router.put("/update/author/:authorid", authorController.modifyAuthor);
router.delete("/delete/author/:authorid", authorController.deleteAuthor);


// USER CRUD // // USER CRUD // // USER CRUD //
// USER CRUD // // USER CRUD // // USER CRUD //
// USER CRUD // // USER CRUD // // USER CRUD //

// REGISTER
router.post('/create/user', [createUserValidator, isEmailExist], userController.createUser)
// LOGIN
router.post('/login/user', userController.loginUser)
// router.use(validateToken)
router.get('/me', userController.me)
// USER CRUD
router.get('/get/user/:userid', userController.getThisUser)
router.get('/get/users', userController.getAllUsers)
router.delete('/delete/user/:userid', userController.deleteThisUser)
router.put('/update/user/:userid', userController.updateThisUser)

module.exports = router;

// BOOK CRUD // BOOK CRUD // BOOK CRUD //
// BOOK CRUD // BOOK CRUD // BOOK CRUD //
// BOOK CRUD // BOOK CRUD // BOOK CRUD //

router.post("/create/book", bookController.createBook);
router.get("/get/book/:bookid", bookController.getBook);
router.get("/get/books", bookController.getBooks);
router.get("/update/book/:bookid", bookController.modifyBook);
router.delete("/delete/book/:bookid", bookController.eraseBook);