let mongoose = require('mongoose');
require('dotenv').config()


const uri = process.env.CONNECTION_STRING

class Database {
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(uri)
          .then(() => {
            console.log('Database connection successful')
          })
          .catch( err => {
            console.error("Dabase connection error")
          })
    }
}

module.exports = new Database();