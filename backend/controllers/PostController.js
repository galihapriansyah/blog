import Post from "../models/PostModel.js";

export const getPosts = async(req, res) => {
  try {
    const response = await Post.findAll();
    res.status(200).json(response);
  } catch(error) {
    console.error(error.message);
  }
}

export const getPostById = async(req, res) => {
  try {
    const response = await Post.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch(error) {
    console.error(error.message);
  }
}

export const createPost = async(req, res) => {
  try {
    await Post.create(req.body);
    res.status(201).json({
      msg : "post created!",
    });
  } catch(error) {
    res.send(error.stack);
  }
}

export const updatePost = async(req, res) => {
  try {
    await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      msg : "post updated!",
    });
  } catch(error) {
    res.send(error.stack);
  }
}

export const deletePost = async(req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      msg : "post deleted!",
    });
  } catch(error) {
    res.send(error.stack);
  }
}