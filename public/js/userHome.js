'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function goToDetail(e) {
	e.preventDefault();
	var projectID = $(this).closest('.items').attr('id');
	console.log(projectID);
	window.location.href = "./index_itemDetail?id=" + projectID;
}

function order(e) {
	e.preventDefault();
	var projectID = window.location.href.substring(window.location.href.indexOf('?'));
	console.log(projectID);
	window.location.href = "./order" + projectID;
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset - 0.0001 >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function goToSellDetail(e) {
	e.preventDefault();
	var projectID = $(this).closest('.sellerItems').attr('id');
	console.log(projectID);
	window.location.href = "./seller_itemDetail?id=" + projectID;
}

function goToHistoryDetail(e) {
	e.preventDefault();
	var projectID = $(this).closest('.historySellerItems').attr('id');
	console.log(projectID);
	window.location.href = "./seller_addFromHistoryDetail?id=" + projectID;
}

function deleteItem(e){
	e.preventDefault();
	var projectID = window.location.href.substring(window.location.href.indexOf('?'));
	window.location.href = "./deleteItem" + projectID;
}

function edit(e) {
	e.preventDefault();
	window.location.href = "./edit";
}

function complete(e) {
	e.preventDefault();
	var projectID = $(this).closest('.incompletedOrder').attr('id');
	console.log(projectID);
	window.location.href = "./buyer_orderHistory2?id=" + projectID;
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".items").click(goToDetail);
	$("#placeOrder").click(order);
	$(".sellerItems").click(goToSellDetail);
	$("#delete").click(deleteItem);
	$("#edit").click(edit);
	$(".complete").click(complete);
	$(".historySellerItems").click(goToHistoryDetail);
}
