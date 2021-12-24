const express = require("express");
// const { check, oneOf, validationResult } = require("express-validator");

// goi controller xu ly router homepage
const loginController = require("./../controllers/login");

let router = express.Router();




module.exports = () => {
    // login and register
    router.get(
        '/',
        (req, res, next)=> loginController.getLogin(req, res, next)
    );

    router.post(
        '/login',
        (req, res, next) => loginController.postLogin(req, res, next)
    );
    router.post(
        '/verifytoken',
        (req, res, next) => loginController.verifyToken(req, res, next)
    )
    return router;
}