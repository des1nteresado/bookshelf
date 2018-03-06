var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    author: String
}, {
    versionKey: false
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;