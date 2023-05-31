const {getAllPosts} = require('../utils/readWriteFile');

module.exports = verifyId = async (req, res, next) => {
  const {id} = req.params;
  const allPosts = await getAllPosts();
  const searchedId = allPosts.find(post => post.id === Number(id));
  if (searchedId) return next();
  next({statusCode: 404, message: "post not found"});
}