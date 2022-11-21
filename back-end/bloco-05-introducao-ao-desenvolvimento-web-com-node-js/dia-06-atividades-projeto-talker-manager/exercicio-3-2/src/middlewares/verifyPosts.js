const {getAllPosts} = require('../utils/readWriteFile');

module.exports = verifyPosts = async (req, res, next) => {
  const allPosts = await getAllPosts();
  if (allPosts.length === 0) return res.status(200).json({posts: []});
  next();
}