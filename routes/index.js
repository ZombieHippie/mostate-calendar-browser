var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var orgs = require('../lib/orgs')
var orgs_cat = require('../lib/orgs_cat')
var buildings = require('../lib/buildings')

var orgs_cat_class = {}
var cat;
for(cat in orgs_cat) {
  var ida, s, _i, _len, _ref;

  _ref = orgs_cat[cat];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    ida = _ref[_i];
    s = orgs_cat_class[ida[1]];
    orgs_cat_class[ida[1]] = s != null ? s + " " + cat : cat
  }
}

router.get('/', function (req, res) {
  res.render("index", {
    view: "index",
    buildings: buildings,
    orgs: orgs,
    orgs_cat: orgs_cat,
    orgs_cat_class: orgs_cat_class
  })
})

module.exports = router
