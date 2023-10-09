const mongoose = require('mongoose')

const dbConfig = "mongodb+srv://db_user:se_db_user_manugin@ynotescluster.aewclyc.mongodb.net/annotations?retryWrites=true&w=majority"

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection