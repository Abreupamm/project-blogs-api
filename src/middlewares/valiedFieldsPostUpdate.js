const mapError = require('../utils/error');

const fieldsValied = (req, res, next) => {
  const { title, content } = req.body;
  const post = [title, content];
  const isValue = post.every((e) => e.length > 0);

  if (isValue === false) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  fieldsValied,
};