const express = require('express')
const router = require('express').Router()

router.use('/', require('./list'))

module.exports = router