const Author = require("../models/author.model.js")


exports.create = (req, res) => {

    // validate the request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }


    // create an author object using the model
    const author = new Author({
        name: req.body.name,
        bio: req.body.bio
    })

    Author.create(author, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          })
        else res.send(data)
      })
}