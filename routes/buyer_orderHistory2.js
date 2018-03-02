
/*
 * GET home page.
 */
var data = require('../orderHistory.json');

exports.view = function(req, res){
  var i = req.query.id;
  i = parseInt(i);
  incompletedItems = data.incompleted_items[i];

  if(incompletedItems != null){
    data.incompleted_items.splice(i,1);
    data.completed_items.push(incompletedItems);
  }
  res.render('buyer_orderHistory2', data);
};
