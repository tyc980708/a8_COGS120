
/*
 * GET home page.
 */
var data = require('../buyer_menu.json');

exports.view = function(req, res){
  res.render('seller_addFromNew', data);
};