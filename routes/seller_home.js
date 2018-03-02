
/*
 * GET home page.
 */
var data = require('../seller_menu.json');

exports.view = function(req, res){
  res.render('seller_home', data);
};