const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./book');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/mongoose_basics', function(err) {
    if (err) throw err;
});

app.get('/books', (req, res) => {
    Book.find((err, book) => {
        if (err) throw err;
        res.send(book);
    });
});

app.post('/books', (req, res) => {
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        author: req.body.author
    });
    book.save((err) => {
        if (err) throw err;
        return res.send(book);
    });
});

app.put('/books/:_id', (req, res) => {
    Book.findByIdAndUpdate(req.params._id, { name: req.body.name, author: req.body.author }, (err, book) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.delete('/books/:_id', (req, res) => {
    Book.findByIdAndRemove(req.params._id, (err, book) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(3000, () => {});