
/*
 * GET home page.
 */
 var data = require('../history_menu.json');

 exports.view = function(req, res){
   var id = req.query.id;
   id = parseInt(id);
   res.render('seller_addFromHistoryDetail', data.history_items[id]);
 };
