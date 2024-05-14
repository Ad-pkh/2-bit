const { Blog } = require("../models/Blog.model");
const { default: mongoose } = require("mongoose");
const { uploadOnCloudinary } = require("../utils/cloudinary");
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const { id } = req.user;
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

    const blog = new Blog({
      title: title,
      description: description,
      user: id,
      category: category,
      thumbnail: thumbnail.url || "",
    });
    await blog.save();
    return res.status(200).json({ message: "Blog Added SuccessFully", blog });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// getAll user Blogs
exports.getAllUserBlogs = async (req, res) => {
  try {
    const { category } = req.query;
    let conditions = {};
    let query = Blog.find(conditions);
    let totalQuery = Blog.find(conditions);

    if (category) {
      query = query.find({ category: category });
      totalQuery = totalQuery.find({ category: category });
    }

    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit, 10);
      const page = parseInt(req.query._page, 10);
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    const blog = await query.exec();
    const count = await totalQuery.countDocuments();
    return res.status(200).json({ blog: blog, total: count });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// get blog by Id
exports.getBlogByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("user");

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

//DELETE pRODUCT
exports.deletBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ message: "Product Deleted SuccessFully!", blog });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// u[date blog]

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
    const blog = await Blog.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        thumbnail: thumbnail.url || "",
      },
      { new: true }
    );
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
//
exports.getownBlog = async (req, res) => {
  try {
    const { id } = req.user;
    const blog = await Blog.find({ user: id });
    if (!blog) {
      return res.status(400).json({ message: "Not Blog Found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
