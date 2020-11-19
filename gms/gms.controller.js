const express = require('express');
const router = express.Router();
// const userService = require('./user.service');

// routes
router.post('/rest/thirdparty/cppm/identityInfo', logPostReqFromCPPM);
router.get('/', getAll);

module.exports = router;

function logPostReqFromCPPM(req, res, next) {
    console.log(req.body);
    res.json(req.body);
}

function getAll(req, res, next) {
    return res.json({"result": "Authenticated"});
}