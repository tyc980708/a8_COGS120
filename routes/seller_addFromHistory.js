
/*
 * GET home page.
 */
var data = require('../history_menu.json');

exports.view = function(req, res){
  res.render('seller_addFromHistory', data);
};
