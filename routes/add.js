var sellerData = require("../seller_menu.json");
var buyerData = require("../buyer_menu.json");

exports.add = function(req, res) { 
	// Your code goes here
	var nameToShow = req.query.name;
	var descriptionToShow = req.query.description;
	var price = req.query.price;
	var pickupTime = req.query.pickupTime;
	var learn = req.query.learn;

	var newSellerItem =
		{
		'name': nameToShow,
		'description': descriptionToShow,
		'imageURL': 'http://lorempixel.com/400/400/people/',
		'price' : price,
		'pickupTime': pickupTime,
		'orderNumbers': '0',
		'learn' : learn
		}
		var distance = Math.random() * 5;
		distance = Math.round( distance * 10) / 10;

		var newBuyerItem =
			{
			'name': nameToShow,
			'description': descriptionToShow,
			'imageURL': 'http://lorempixel.com/400/400/people/',
			'price' : price,
			'pickupTime': pickupTime,
			'sellerRating': 'None',
			'distance': distance + ' mi',
			'learn' : learn
			}

	sellerData.seller_items.push(newSellerItem);
	buyerData.items.push(newBuyerItem);
	res.render('seller_home', sellerData);
 }
