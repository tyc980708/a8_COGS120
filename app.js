
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/login');
var buyer_home = require('./routes/buyer_home')
var index_itemDetail = require('./routes/index_itemDetail');
var buyer_itemPhotos = require('./routes/buyer_itemPhotos');
var buyer_orderHistory_A = require('./routes/buyer_orderHistory_A');
var buyer_orderHistory_B = require('./routes/buyer_orderHistory_B');
var account = require('./routes/account');
var account2 = require('./routes/account2');
var buyer_orderDetail = require('./routes/buyer_orderDetail');
var seller_addFromHistory = require('./routes/seller_addFromHistory');
var seller_addFromHistoryDetail = require('./routes/seller_addFromHistoryDetail');
var seller_addFromNew = require('./routes/seller_addFromNew');
var seller_home = require('./routes/seller_home');
var seller_itemDetail = require('./routes/seller_itemDetail');
var seller_itemPhotos = require('./routes/seller_itemPhotos');
var seller_addMenu = require('./routes/seller_addMenu');
var add = require('./routes/add');
var order = require('./routes/order');
var deleteItem = require('./routes/deleteItem');
var buyer_orderHistory2 = require('./routes/buyer_orderHistory2');
var edit = require('./routes/edit');
var editted = require('./routes/editted');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/index_itemDetail', index_itemDetail.viewMenu);
app.get('/', index.view);
app.get('/buyer_itemPhotos', buyer_itemPhotos.view);
app.get('/', index.view);

// AB Test
app.get('/buyer_orderHistory_A', buyer_orderHistory_A.view);
app.get('/buyer_orderHistory_B', buyer_orderHistory_B.view);
app.get('/buyer_orderHistory2', buyer_orderHistory2.view);
app.get('/', index.view);
app.get('/account', account.view);
app.get('/account2', account2.view);
app.get('/', index.view);
app.get('/buyer_orderDetail', buyer_orderDetail.view);
app.get('/', index.view);
app.get('/seller_addFromHistory', seller_addFromHistory.view);
app.get('/', index.view);
app.get('/seller_addFromHistoryDetail', seller_addFromHistoryDetail.view);
app.get('/', index.view);
app.get('/seller_addFromNew', seller_addFromNew.view);
app.get('/', index.view);
app.get('/seller_home', seller_home.view);
app.get('/', index.view);
app.get('/seller_itemDetail', seller_itemDetail.view);
app.get('/', index.view);
app.get('/seller_itemPhotos', seller_itemPhotos.view);
app.get('/', index.view);
app.get('/seller_addMenu', seller_addMenu.view);
app.get('/', index.view);
app.get('/buyer_home', buyer_home.view);
app.get('/add', add.add);
app.get('/order', order.add);
app.get('/deleteItem', deleteItem.delete);
app.get('/edit', edit.view);
app.get('/editted', editted.change);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
