var express = require("express");

var router = express.Router();

//Import the model (burger.js)
var burger = require("../models/burger.js");

//Routes
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//all burgers
router.get("/api", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    })
});

//posts new burger
router.post("/", function (req, res) {
    console.log(req.body.input);
    burger.create(req.body.input, function () {
        res.redirect("/");
    })
});
//update devoured burgers
router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log(id);

    burger.update("devoured", true, id, function () {
        res.redirect("/");
    })
});

module.exports = router;