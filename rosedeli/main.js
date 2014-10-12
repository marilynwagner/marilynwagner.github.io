
// Constants 
var gc_fSandwichPrice = 5.99; // Price for each sandwich
var gc_fExtrasPrice = 1.50;  // Price for each extra item

// GLOBAL VARS

// Global object vars
var divErrors;
var divOrder;
var txtTotal;
var radSandwich;
var radSize;
var spanExtrasPrice;
var chkExtras;
var txtCreditCardNbr;
var divCreditCardInfo;
var txtName;
var txtMonth;
var selPayment;
var selYear;

// Other global vars
var g_nTotal;
var g_sSandwich;
var g_sSize;
var g_sExtras;

// Hook up an event handler for window.onload to the Init function.
window.onload = Init;

function Init() {

	document.getElementById("h1Title").innerHTML = "Rose's Deli";
	divErrors = document.getElementById("divErrors");
	divOrder = document.getElementById("divOrder");
	txtTotal = document.getElementById("txtTotal");
	radSandwich = document.getElementsByName("radSandwich");
	radSize = document.getElementsByName("radSize");
	spanExtrasPrice = document.getElementById("spanExtrasPrice");
	chkExtras = document.getElementsByName("chkExtras");
	txtCreditCardNbr = document.getElementById("txtCreditCardNbr");
	divCreditCardInfo = document.getElementById("divCreditCardInfo");	
	txtName = document.getElementById("txtName");
	txtMonth = document.getElementById("txtMonth");
	selPayment = document.getElementById("selPayment");
	selYear = document.getElementById("selYear");	
	
	// Set the innerHTML of spanExtrasPrice to gc_fExtrasPrice.  
	spanExtrasPrice.innerHTML = Number(gc_fExtrasPrice).toFixed(2);

	// Hook up event handlers needed
	document.getElementById("btnCalculateTotal").onclick = CalculateTotal;
	document.getElementById("btnProcessOrder").onclick = ProcessOrder;
	document.getElementById("btnReset").onclick = Reset;
 
	// This function will check to see if the user selected the Credit card option.  If he/she did, 
	// set the CSS visibility property to "visible", otherwise set it to "hidden".
	selPayment.onchange = 
		function() {					
			if (selPayment.selectedIndex === 2) {
				divCreditCardInfo.style.visibility = 'visible';					
			}
			else {
				divCreditCardInfo.style.visibility = 'hidden';
			}			
		};
} // function Init()

function CalculateTotal() {

	// this function should be called when the user clicks the Calculate Total button.  
	// Its purpose is to calculate the total.  
	
	// clear out divErrors
	divErrors.innerHTML = "";		

	g_nTotal = 0;
	g_sExtras = "";
	g_sSandwich = ""; 

	
	/*  CONVERT: Sandwich code
		Using a FOR loop and a single IF statement within the loop, see which radio button they checked.  
		When you find it, set g_sSandwich to the sandwich name and break out of the loop using the break command.
		If nothing is selected, set divErrors to "Select a sandwich", and exit the function.
		Use a boolean variable in the If statement, then check its value after you get out of the loop.
	*/
	var didIFindSand = false;
	for(var iSandwichIndex=0; iSandwichIndex<4; iSandwichIndex++) {	
		if (radSandwich[iSandwichIndex].checked === true) {
			g_sSandwich = radSandwich[iSandwichIndex].value;
			didIFindSand = true;
			break;
		}
	}
	if (!didIFindSand) {
		divErrors.innerHTML = "Select a sandwich";
		return;	
	}
	
	/* Using a FOR loop and a single IF statement within the loop, see which radio button they checked, 
		get the price and update the total.  Then break out of the loop using the break command.
		If nothing is selected, set divErrors to "Please choose a size", and exit the function.
	*/
	var didIFindSize = false;
		for(var iSizeIndex=0; iSizeIndex<3; iSizeIndex++) {		
			if (radSize[iSizeIndex].checked === true) {
				g_sSize = radSize[iSizeIndex].value;
				g_nTotal = Number(radSize[iSizeIndex].title.substr(1));
				didIFindSize = true;
				break;
			}
		}
	if (!didIFindSize) {
		divErrors.innerHTML = "Please choose a size";
		return;	
	}

	for(var iExtraIndex=0; iExtraIndex<3; iExtraIndex++) {
		if(chkExtras[iExtraIndex].checked === true) {
			g_sExtras += chkExtras[iExtraIndex].value + "<br/>";
			g_nTotal += gc_fExtrasPrice; 					
		}			
	}

	// DO IT: Assign the total to the txtTotal textbox.  Include a dollar sign and use .toFixed() to display 2 decimal places
	txtTotal.value = "$" + g_nTotal.toFixed(2);

} // function CalculateTotal


function ProcessOrder() {

	// This function should run when the ProcessOrder button is clicked.
	divErrors.innerHTML = "";
	divErrors.style.display = "block";// comment out to see what exactly this code does
	divOrder.innerHTML = "";

	// If the name field is blank, display "Enter customer's name", set the focus and get out.
	if (txtName.value === "") {
		divErrors.innerHTML = "Enter customer's name";
		txtName.focus();
		return;
	}
 
	/* 
		Use an IF statement to determine if the user selected the credit card option in the selPayment dropdown
		If they did:
		    if the credit card number field was left blank or the contents of the field is not a number, display "Enter your 
		    card number using only digits" in divErrors, put focus on the card number field and get out.
		    if the month field was left blank or the contents of the field is not a number, display "You must enter a number 
		    for this field" in divErrors, put focus on the month field and get out.
		    if the month they entered is less than 1 or > 12, display "Card Month must be between 1 and 12", put focus on the 
		    month field and get out.
		    if they neglected to select a year, display "Select a year" in divErrors, put focus on the year field and get out.
	*/
	if (selPayment.selectedIndex === 2) {
		if ((txtCreditCardNbr.value === "")|| (isNaN(txtCreditCardNbr.value))) {
			divErrors.innerHTML = "Enter your card number using only digits";
			txtCreditCardNbr.focus();
			return;
		}
		
		if (txtMonth.value === "" || isNaN(txtMonth.value)) {
			divErrors.innerHTML = "You must enter a number for this field";
		    txtMonth.focus();
		    return;
		}

		if (Number(txtMonth.value) < 1 || Number(txtMonth.value) > 12) {
			divErrors.innerHTML = "Card Month must be between 1 and 12";
		    txtMonth.focus();
			return;
		} 
		
		if (selYear.value === "") {
			divErrors.innerHTML = "Select a year";
			selYear.focus();
			return;
		} 		
	}

	// Concatenate the appropriate msg into divOrder.  
	divOrder.innerHTML += "<h3>Welcome to Rose's Deli, " + txtName.value + "</h3>";  
	divOrder.innerHTML += "<p>You have ordered a " + g_sSize + " " + g_sSandwich + " Sandwich with <br>" + g_sExtras + "</p>"; 
	divOrder.innerHTML += "<p>Your Total is $" + g_nTotal + "</p>"; 
	divOrder.innerHTML += "<p>Paid by " + selPayment.value + "</p>";
	divOrder.innerHTML += "<p><strong>Have a nice day!</strong></p>"; 
	

} // function ProcessOrder

function Reset () {

	// This function should run when the Reset button is clicked.
	divOrder.innerHTML = "";
}