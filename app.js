var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_basics', function(err) {

    if (err) throw err;

    console.log('Successfully connected');

});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var books = [{
        id: 1,
        name: "Татарин",
        author: "Толстой"
    },
    {
        id: 2,
        name: "Болгарин",
        author: "Худой"
    },
    {
        id: 3,
        name: "Боярин",
        author: "Средний"
    }
];


app.get('/', (req, res) => {
    res.send('Hello api');
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    var book = books.find((book) => {
        return book.id === Number(req.params.id);
    });
    res.send(book);
});

app.post('/books', (req, res) => {
    var book = {
        id: Date.now(),
        name: req.body.name, //не паше
        author: req.body.author //не паше
    };
    books.push(book);
    res.send(book);
}); //raw is ok!
app.put('/books/:id', (req, res) => {
    var book = books.find((book) => {
        return book.id === Number(req.params.id);
    });
    book.name = req.body.name;
    book.author = req.body.author;
    res.send(book);
}); //not working  raw/xxx

app.delete('/books/:id', (req, res) => {
    var item = books.indexOf(books.find(book => book.id === Number(req.params.id)));
    books.splice(item, 1);
    res.sendStatus(200);
<<<<<<< HEAD
});
=======
}); //not working raw/xxx
>>>>>>> 9e45d49b47a2e6343209ce3440e7794a8bff29ed

app.listen(3000, () => {
    console.log('api app started');
});