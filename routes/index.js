var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var orgs = require('../lib/orgs')
var buildings = require('../lib/buildings')

router.get('/', function (req, res) {
  res.render("index", { view: "index", buildings: buildings, orgs: orgs })
})

module.exports = router
