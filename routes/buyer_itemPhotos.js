
/*
 * GET home page.
 */
var data = require('../buyer_menu.json');

exports.view = function(req, res){
  res.render('buyer_itemPhotos', data);
};