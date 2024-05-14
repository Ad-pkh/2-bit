const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/auth.middleware");
const { upload } = require("../Middleware/multer.middleware");
const {
  createBlog,
  deletBlog,
  getAllUserBlogs,
  getBlogByid,
  updateBlog,
  getownBlog,
} = require("../Controllers/Blog.controllers");
router
  .post(
    "/create-blog",
    verifyJWT,
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    createBlog
  )
  .get("/getallblog", getAllUserBlogs)
  .delete("/delete/:id", verifyJWT, deletBlog)
  .patch(
    "/update/:id",
    verifyJWT,
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),

    updateBlog
  )
  .get("/getblog/:id", getBlogByid)
  .get("/getownBlog", verifyJWT, getownBlog);

exports.router = router;
