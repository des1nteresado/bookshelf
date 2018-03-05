var express = require('express');
var bodyParser = require('body-parser');

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
        name: req.body.name,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
})

app.listen(3000, () => {
    console.log('api app started');
})