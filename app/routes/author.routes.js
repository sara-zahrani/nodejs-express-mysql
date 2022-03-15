module.exports = app => {
    const authors = require("../controllers/author.controller.js");
  
    var router = require("express").Router()
  
    // Create a new Tutorial
    router.post("/", authors.create)

    app.use('/api/authors', router);

}

  