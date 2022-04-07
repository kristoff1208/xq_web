const express = require('express')
const router = express.Router()


router.get('/case', function (req, res, next) {
    res.render('');
})

router.get('/blkbx', function (req, res, next) {
    res.render('blkbx');
})

router.get('/chuinc', function (req, res, next) {
    res.render('chuinc');
})

module.exports = router;