
/*
 * GET home page.
 */
var data = require('../account.json');

exports.view = function(req, res){
  res.render('account2', data);
};
