
/*
 * GET home page.
 */
var data = require('../account.json');

exports.view = function(req, res){
  res.render('edit', data);
};
