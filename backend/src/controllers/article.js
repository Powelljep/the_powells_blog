const article = require('../models/article');
const Article = require('../models/article')

exports.getArticles = (req, res) => {
    Article.find()
    .then((articles) => {
        res.status(200).json(articles);
    })
    .catch((error) => {
        res.status(400).json({error});
    })
}

exports.getOneArticle = (req, res) => {
    Article.findOne({_id: req.params.articleId})
        .then((article) => {
            res.status(200).json(article);
        })
        .catch((error) => {
            res.status(404).json({error})
        })
}

exports.postArticle = (req, res) => {
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        like: req.body.like
    })
    article.save()
        .then(()=>{
            res.status(201).json({message: "Article saved successfully!"})
        })
        .catch((error) => {
            res.status(400).json({error})
        })
}

exports.editArticle = (req, res) => {
    const article = new Article({
      _id: req.params.id,
      title: req.params.title,
      author: req.params.author,
      content: req.params.content,
      like: req.params.like,
    });
    Article.updateOne({_id:req.params.articleId}, article)
        .then(() => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            })
        })
        .catch((error) => {
            res.status(400).json({error})
        })
}

exports.deleteArticle = (req, res) => {

}