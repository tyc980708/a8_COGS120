var data = require("../account.json");

exports.change = function(req, res) { 
	// Your code goes here
	var nameToShow = req.query.name;
	var phoneToShow = req.query.phone;
	var email = req.query.email;
	var visa = req.query.visa;
	var paypal = req.query.paypal;
	var venmo = req.query.venmo;

	var newInfo =
		{
		'name': nameToShow,
		'phone': phoneToShow,
		'email': email,
		'visa': visa,
		'paypal': paypal,
		'venmo': venmo,
		'imageURL': "img/accountPic.png"
		}

	data.info.splice(0,1);
	data.info.push(newInfo);

	res.render('account', data);
 }
