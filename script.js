// TO-DO: 

// 1. Add the tally element, taking into account the price AND quantity of each food item. 

// 2. Make a CalcTax function and pass the updated subtotal. Display the new total dynamically.

var occupied = []; //STarter variable to keep track of present items. Will reset every page load.

var groceryList = [ //Array of grocery items/objects. Contains reference information for all groceries.
{name: "Donut", price: 1.69, id: 0}, 
{name: "Bagel", price: 2.19, id: 1}, 
{name: "Loaf", price: 1.19, id: 2},
{name: "Pastry", price: 1.22, id: 3}, 
{name: "Pie", price: 7.01, id: 4}
];

$(".addButton").click(addItem); // Event Listener: Add item when button clicked.

// Try: Simply adding a list item and using JS to tally all associated ingredients to make said item.

// Try: Having all of the elements slide down on load = $("body").slideDown();

var subtotal = 0;
var total;

function addItem (event) {
	
	var itemID = this.parentNode.dataset.id; // Item ID, passed via a custom data type in the HTML.
	var present = occupied.find(checkItem); // Check if item to be added is present already.
	var quantity = this.parentNode.childNodes[2].value; // Entered quantity to be added.

	if (quantity === 0 || quantity ==="") { //Does nothing if the quantity is empty or 0.
	
	} else if (present) { //If the item to be added is already present, simply update the total quantity.
		
		$("#list-content").find(`[data-id=${itemID}]`).children("span").text(`$${groceryList[itemID].price} x ${quantity}`);

	} else { // If the item is not present and is non-zero, create the element with the correct quantity and name, etc.
		
		var finalItem = `<div class="foodItem" data-id="${itemID}"> ${groceryList[itemID].name}
							<span>$${groceryList[itemID].price} x ${quantity}</span></div>`;
		var $target = $("#list-content");
		$target.append(finalItem);

		subtotal += quantity * groceryList[itemID].price;
		total = subtotal * 1.06;
		updateTotals(subtotal, total);
		
		occupied.push(itemID);
	}

	function checkItem (item) { //Helper function, a part of line 53.

		return item === itemID;
	}
} 

function updateTotals(subtotal, total) {

	$("#foodTally").text("$" +subtotal.toFixed(2));
	$("#finalTotal").text("$" +total.toFixed(2));

}

//Function tallyItems toDO :

// Store the current value of the tally in a global variable.Done.

// Append the (item X quantity) * 1.06 to the total variable. 

// Update  the variable to reflect the new total.