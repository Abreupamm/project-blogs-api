const mapError = require('../utils/error');
const serviceBloPost = require('../service/post.service');

const displayNameIsValied = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(mapError('IS_REQUIRED')).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const emailIsValied = (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  const validation = re.test(email);
  if (!validation) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordIsValied = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({
        message: '"password" length must be at least 6 characters long',
      });
  }
  next();
};

const valiedUserPost = async (req, res, next) => {
  const { post } = await serviceBloPost.getPostId(req.params.id);

  if (post.user.id !== req.locals.id) {
    return res.status(mapError('UNAUTHORIZED')).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  displayNameIsValied,
  emailIsValied,
  passwordIsValied,
  valiedUserPost,
};
