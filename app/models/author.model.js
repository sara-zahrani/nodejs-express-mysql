const sql = require("./db.js")


//constructor 
const Author = function (author) {
    this.name = author.name
    this.bio = author.bio
}

Author.create = (newAuthor, result) => {
    sql.query("INSERT INTO authors SET ?"), newAuthor, (err, res) => {
        if (err) {
            console.log("auther error: ", err);
            result(err, null);
            return;
        }

        console.log("created tutorial: ", {id: res.insertId, ...newAuthor })
    }
}


module.exports = Author;
