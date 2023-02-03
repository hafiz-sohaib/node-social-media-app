const mongoose = require('mongoose');
let db;

mongoose.set("strictQuery", false);
db = mongoose.connect('mongodb+srv://admin:WhiteMagic@mycluster.kbteo6o.mongodb.net/jwt_auth?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

if (!db) return console.log('Unable to connect');

module.exports = db;