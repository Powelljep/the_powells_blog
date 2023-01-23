const express = require('express');
const router = express.Router();
const {getArticles, getOneArticle, postArticle, editArticle, deleteArticle } = require('../controllers/article');

router.get('/',getArticles);
router.post('/',postArticle);
router.get("/:articleId", getOneArticle);
router.put('/:articleId', editArticle);
router.delete('/:articleId',deleteArticle);

module.exports = router;
