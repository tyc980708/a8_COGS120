var data = require("../seller_menu.json");

exports.delete = function(req, res) { 
	var id = req.query.id;
	id = parseInt(id);

	data.seller_items.splice(id,1);

	res.render('seller_home', data);
 }
