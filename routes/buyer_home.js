
/*
 * GET home page.
 */
var data = require('../buyer_menu.json');
var userInfo = require('../account.json');

exports.view = function(req, res){

/**
  var username = req.query.name;
  console.log(username.length);
  if (username.length===0) {
    console.log("username undefined")
  }
  else {
    var newinfo =
      {
        "name": username,
        "imageURL": "img/accountPic.png",
        "phone": "",
        "email": "",
        "visa": "",
        "paypal": "",
        "venmo": ""
      }
    userInfo.info.splice(0,1);
    userInfo.info.push(newinfo);
  }
**/

  res.render('buyer_home', data);
};
