
/*
 * GET home page.
 */
var data = require('../seller_menu.json');

exports.view = function(req, res){
  var id = req.query.id;
  id = parseInt(id);
  res.render('seller_itemDetail', data.seller_items[id]);
};
