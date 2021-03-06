const articleService = require('../services/article');

exports.createArticle = async (req, res, next) => {
  try {
    const article = await articleService.createArticle({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id,
    });
    res.json(article);
  } catch (err) {
    next(err)
  }
}
exports.updateArticle = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}
exports.deleteArticle = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}
exports.getOneArticle = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}
exports.getArticles = async (req, res, next) => {
  try {
    const [items, count] = await articleService.getArticles({});
    res.json({
      items,
      count
    });
  } catch (err) {
    next(err)
  }
}
exports.addLike = async (req, res, next) => {
  try {
    const nextArticle = await articleService.addLike({
      id: req.params.id,
      user: req.user,
    });
    res.json(nextArticle);
  } catch (err) {
    next(err)
  }
}
exports.removeLike = async (req, res, next) => {
  try {
    const nextArticle = await articleService.removeLike({
      id: req.params.id,
      user: req.user,
    });
    res.json(nextArticle);
  } catch (err) {
    next(err)
  }
}
