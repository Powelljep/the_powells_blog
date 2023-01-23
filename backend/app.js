const express = require("express");
const db = require('./src/database')
const articleRoutes = require('./src/routes/article')


const app = express();
app.use(express.json())

app.use('/api/article', articleRoutes)

module.exports = app;
