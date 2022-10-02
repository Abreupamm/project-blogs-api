const postService = require('../service/post.service');
// const categoriesService = require('../service/categories.service');

const createPost = async (req, res) => {
  const { type, message, post } = await postService.newPost(req.body, req.locals);
  
  if (!post) {
    return res.status(type).json({ message });
  }

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};