let express = require('express');
const caseRouter = require('./public/routes/case')
const path = require('path');
let app = express();
const router = express.Router()


app.use(express.static(path.join(__dirname + '../public')));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use('/case', caseRouter);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname+'/public/index.html');
// });

app.get('/', function (req, res, next) {
    res.render('index');
})

app.get('/test', function (req, res) {
    res.sendFile(__dirname+'/public/test.html');
});


app.listen(3030, function () {
});
