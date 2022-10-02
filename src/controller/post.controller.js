const postService = require('../service/post.service');
// const categoriesService = require('../service/categories.service');

const createPost = async (req, res) => {
  const { type, message, post } = await postService.newPost(req.body, req.locals);
  
  if (!post) {
    return res.status(type).json({ message });
  }

  return res.status(201).json(post);
};

const getAllPosts = async (req, res) => {
  const { posts } = await postService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
};