var data = require("../orderHistory.json");
var origin = require("../buyer_menu.json");

exports.add = function(req, res) { 
	var id = req.query.id;
	id = parseInt(id);
	var item = origin.items[id];

	console.log(id);

	data.incompleted_items.push(item);
	res.render('buyer_orderHistory_A', data);
 }
