let express = require('express');
const exphbs = require('express-handlebars');
let app = express();
const db = require('./db/connection');
let bodyParser = require("body-parser");
const path = require('path');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PORTA = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// router
app.get('/', function(req, res) {

    let search = req.query.job;
    let query = '%'+search+'%';

    if (!search) {
        Job.findAll({order: [
            ['createdAt', 'DESC'],
        ]}).then( jobs => {
            res.render('index', {
                jobs
            });
        }).catch(err => console.log("erro ao buscar", err));
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC'],
        ]}).then( jobs => {
            res.render('index', {
                jobs, search
            });
        }).catch(err => console.log("erro ao buscar", err));
    }



});

// job router
app.use("/jobs", require("./routes/jobs"));

// db connection
db.authenticate().then(() => {
    console.log("Conectado ao banco com sucesso!!");
}).catch(err => {
    console.log("Erro ao se conectar ao banco!", err);
})

app.listen(PORTA, function() {
    console.log("Servidor ativado na porta ", PORTA);
})