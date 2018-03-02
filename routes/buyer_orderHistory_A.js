
/*
 * GET home page.
 */
var data = require('../orderHistory.json');

exports.view = function(req, res){
  res.render('buyer_orderHistory_A', data);
};
