const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/add", (req, res) => {
    res.render("add");
});

// form rota de envio 
router.get("/add", (req, res) => {
    res.render('add');
})

// view job individual
router.get("/view/:id", function(req, res) {
    Job.findOne({
        where: {id: req.params.id}
    }).then(job => {
        res.render('view', {
            job
        });
    }).catch(err => console.log("erro inesperado aconteceu ao exibir o template", err));
});

// add job via post
router.post("/add", (req, res) => {

    const {title, description, salary, company, email, new_job} = req.body;

    // insert
    Job.create({
        title,
        description,
        salary,
        company, 
        email, 
        new_job
    }).then(() => {
        res.redirect("/");
    }).catch(err => console.log("erro ao criar", err));

});

module.exports = router