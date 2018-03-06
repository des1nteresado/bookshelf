const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    author: String
}, {
    versionKey: false
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;