TO-DO: 

1. Add the tally element, taking into account the price AND quantity of each food item. 

2. Make a CalcTax function and pass the supdated subtotal. DUsplay the new total dynamically.

var occupied = [];

var groceryList = [ //Array of grocery items. Contains reference information for all groceries.
{name: "Donut", price: 1.69, id: 0}, 
{name: "Bagel", price: 2.19, id: 1}, 
{name: "Loaf", price: 1.19, id: 2},
{name: "Pastry", price: 1.22, id: 3}, 
{name: "Pie", price: 7.01, id: 4}
];


$(".addButton").click(addItem);

console.log();

// Try: Simply adding a list item and using JS to tally all associated ingredients to make said item.

// Try: Having all of the elements slide down on load = $("body").slideDown();


// console.log($("#list-content"));

function tallyItems (groceries) {

	var subtotal = 0;

	for (var i = 0; i < groceries.length; i++) {
	
		var finalItem = `<div class="foodItem">${groceries[i].name} <span>$${groceries[i].price}</span></div>`;
		var $target = $("#list-content");
		$target.append(finalItem);

		subtotal+=groceries[i].price;

	}

	$target.append(`<div class="foodItem">Subtotal <span>$${subtotal.toFixed(2)}</span></div>`);

	$("#finalTotal").append("$" + (subtotal * 1.06).toFixed(2));

}


function addItem (event) {
	
	var itemID = this.parentNode.dataset.id;
	var present = occupied.find(checkItem);
	var quantity = this.parentNode.childNodes[2].value;

	if (quantity === 0 || quantity ==="") {

	} else if (present) {

		$("#list-content").find(`[data-id=${itemID}]`).children("span").text(`$${groceryList[itemID].price} x ${quantity}`);
		
	} else {

		var finalItem = `<div class="foodItem" data-id="${itemID}">${groceryList[itemID].name}<span>$${groceryList[itemID].price} x ${quantity}</span></div>`;
		var $target = $("#list-content");
		$target.append(finalItem);

		occupied.push(itemID);
	}

	function checkItem (item) {

		return item === itemID;
}
} 



// Steps For checking if the item is present: 

// 1. Check to see if the item is already present.

// 2. If so, then add to the tally of the items.

// 3. If not, then create the element with 
// the correct quantity and append it to the list.



// Needed information: 

// the ID of the item

// the desired quantity of the item

