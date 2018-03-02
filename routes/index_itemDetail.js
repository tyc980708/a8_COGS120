
var data = require('../buyer_menu.json');

exports.viewMenu = function(req, res) { 
  // controller code goes here 
  var i = req.query.id;
  i = parseInt(i);
  res.render('index_itemDetail', data.items[i]);
};
