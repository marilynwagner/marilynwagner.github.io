// DO NOT DELETE ANYTHING IN THIS FILE

/*jsl:option explicit*/
/*jsl:declare $*//*jsl:declare addEventListener*//*jsl:declare alert*//*jsl:declare blur*//*jsl:declare clearInterval*//*jsl:declare clearTimeout*//*jsl:declare close*//*jsl:declare closed*//*jsl:declare confirm*//*jsl:declare console*//*jsl:declare Debug*//*jsl:declare defaultStatus*//*jsl:declare document*//*jsl:declare event*//*jsl:declare focus*//*jsl:declare frames*//*jsl:declare getComputedStyle*//*jsl:declare history*//*jsl:declare Image*//*jsl:declare length*//*jsl:declare location*//*jsl:declare moveBy*//*jsl:declare moveTo*//*jsl:declare navigator*//*jsl:declare open*//*jsl:declare opener*//*jsl:declare opera*//*jsl:declare Option*//*jsl:declare parent*//*jsl:declare Number*//*jsl:declare parseInt*//*jsl:declare print*//*jsl:declare prompt*//*jsl:declare resizeBy*//*jsl:declare resizeTo*//*jsl:declare screen*//*jsl:declare scroll*//*jsl:declare scrollBy*//*jsl:declare scrollTo*//*jsl:declare setInterval*//*jsl:declare setTimeout*//*jsl:declare status*//*jsl:declare top*//*jsl:declare window*//*jsl:declare XMLHttpRequest*/

// Constants (Constants are variables that never change throughout the running of your program. 
// They are almost always declared globally.)
var gc_fSandwichPrice = 5.99; // Price for each sandwich (Version 1 only)

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



// DO IT: Hook up an event handler for window.onload to the Init function.
window.onload = Init;

function Init() {

	// DO IT: Change the version number in the line below, if necessary, so it 
	// accurately reflects this particular version of Dirty Deli.
	document.getElementById("h1Title").innerHTML = "Rose's Deli";

	// DO IT: grab and assign any html objects you need to work with
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
	
	// DO IT: Set the innerHTML of spanExtrasPrice to gc_fExtrasPrice.  Tip: Use the
	// .toFixed() method to display it with 2 decimal places
	spanExtrasPrice.innerHTML = Number(gc_fExtrasPrice).toFixed(2);


	// DO IT: Hook up any event handlers you need
	document.getElementById("btnCalculateTotal").onclick = CalculateTotal;
	document.getElementById("btnProcessOrder").onclick = ProcessOrder;

	// Version 2  DONE
	// DO IT: You need to hook up an event handler that runs whenever the user selects a 
	// different Payment option.  This is the "onchange" event.  I suggest you use an anonymous 
	// function, and make use of the *selectedIndex* property to see if they chose the credit card.  
	// This function will check to see if the user selected the Credit card option.  If they did, 
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

// function Init

function CalculateTotal() {

	// this function should be called when the user clicks the Calculate Total button.  
	// Its purpose is mainly to, well, calculate the total.  Remember to hook up an appropriate 
	// event handler so this function will be called when they click.
	
	// DO IT: clear out divErrors
	divErrors.innerHTML = "";		

	// DO IT: Tip: you're going to be adding to g_nTotal.  Remember: adding anything to garbage 
	// will always give you garbage.  So how do you prevent this error?
	// Same deal for g_sExtras.			
	g_nTotal = 0;
	g_sExtras = "";
	g_sSandwich = ""; 

	/*  DO IT:
		Sandwich code - Version 1
		Using an IF statement, see which radio button they checked, and assign the value of the 
		selected sandwich to a global var name g_sSandwich.
		If nothing is selected, set divErrors to "Select a sandwich", and exit the function.
	*/	
	
    /*
		Sandwich code - Version 2  
		Within each IF statement remove the line of code you wrote for Version 1.  Replace it 
		with a call to a function (that you will write) named GetSandwichName().  When you call 
		this function, pass it one parameter - the index of the radSandwich radio button that the 
		user checked.  More info on the function itself is given below.
	*/
	
	// Version 3
	/*  CONVERT: Sandwich code
		Using a FOR loop and a single IF statement within the loop, see which radio button they checked.  
		When you find it, set g_sSandwich to the sandwich name and break out of the loop using the break command.
		If nothing is selected, set divErrors to "Select a sandwich", and exit the function.
		But how do you know if nothing was selected?  Use a boolean variable in the If statement, then check its 
		value after you get out of the loop.
		Remember: Your code should be flexible enough so that if the number of sandwiches change, your code can 
		still work.  Afterall, that's one of the reasons we're using a loop.
		Do NOT call the GetSandwichName() function.  Incorporate its code here, and remove it.
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
	
	/* DO IT:
		This is the Size code.
		Make sure they selected a size.
		Update the total by adding the price of a sandwich (which is already declared as a constant) to the total
		If nothing is selected, set divErrors to "Please choose a size", and exit the function.

		EXTRA CHALLENGE:
		The sandwiches are not all the same price.  The price of each sandwich is contained within the title attribute 
		of the radSandwich radio button for that sandwich (take a look at the html to verify this).
		So, you need to call a function (that you will write)  named GetSizeUpdateTotal().  More on that below.
	*/
	
	// Version 3
	/* CONVERT: Size code
		Once again, using a FOR loop and a single IF statement within the loop, see which radio button they checked, 
		get the price and update the total just like you did previously.  Then break out of the loop using the break command.

		If nothing is selected, set divErrors to "Please choose a size", and exit the function.
		Do NOT call the GetSizeUpdateTotal() function.  Incorporate its code here, and remove it.
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
	/* DO IT:
		"Extras" code - Version 1
		Using an IF statement, see which extra(s) they checked.	For each extra selected, do the following:
		Concatenate the value of the selected extra to a global var name g_sExtras.
		Update the Total with the price of the Extra.


		"Extras" code - Version 2  
		Remove each IF statement you wrote for Version 1.  Replace it with a call to a function (that you will write) 
		named GetExtraUpdateTotal().   When you call this function, pass it one parameter - the index of the chkExtras 
		checkbox that the user checked.  More info on the function itself is given below.
	*/	
	
	// Version 3
	/* CONVERT:	 "Extras" code
		Again, using a FOR loop and a single IF statement within the loop, do what needs to be done.  Remember NOT to 
		break out of the loop when you find a checked checkbox (there may be more).
		Do NOT call the GetExtraUpdateTotal() function.  Incorporate its code here, and remove it.
	*/
	for(var iExtraIndex=0; iExtraIndex<3; iExtraIndex++) {
		if(chkExtras[iExtraIndex].checked === true) {
			g_sExtras += chkExtras[iExtraIndex].value + "<br/>";
			g_nTotal += gc_fExtrasPrice; 					
		}			
	}

	/* ****** That's it -- you're done with the loops. ******* */

	/* DO IT:
		Optional fun: Remove the trailing comma on the last extra.
		HINT: use the length property and the substr() method.
	*/

	// DO IT: Assign the total to the txtTotal textbox.  Include a dollar sign and use .toFixed() to display 2 decimal places
	txtTotal.value = "$" + g_nTotal.toFixed(2);

} // function CalculateTotal

// Version 2 
/* DO IT:
	Declare function GetSandwichName().
	This function takes one parameter, named p_iSandwichIndex, which is a radSandwich radio button index, i.e. the index of 
	the Sandwich they selected.
	It assigns the value of the selected sandwich to a global var name g_sSandwich.
*/

// END Version 2

// EXTRA CHALLENGE
/* DO IT:
	Declare function GetSizeUpdateTotal().
	This function takes one parameter, named p_iSizeIndex, which is a radSize radio button index, i.e. the index of the radSize 
	radio button that they selected.
	The function should assign the *value* of the selected size to a global var name g_sSize.
	Also, it must update the Total with the price for the size they selected.  The price is located in the title attribute of 
	the radio button (take a look).
	Remember that (using dot notation) you can access any object attribute you want, once you grab the object.
	But the price in the title attribute contains a dollar sign, and you want everything AFTER the dollar sign.  Use the 
	substr() method to get the entire string, starting with the SECOND character in the string.  Look back on our class 
	notes to see how we did this.
	Use an alert to see that you got what you intended.
	Then, convert that string to a number and add it to the Total.

	TIP:  Declare local vars as necessary.
*/

// Version 2 
/* DO IT:
	Declare function GetExtraUpdateTotal().
	This function takes one parameter, named p_iExtraIndex, which is a chkExtras checkbox index, i.e. the index of an extra 
	they selected.
	Use an if statement to see if this particular checkbox is checked.  If it is, then do the following:
	Concatenate the value of the selected extra to a global var name g_sExtras.
	Update the Total with the price of the Extra.
*/
function ProcessOrder() {

	// This function should run when the ProcessOrder button is clicked.


	// Version 2
	// DO IT: declare any local vars you may need


	// Version 2
	// DO IT: Before you do your error checking, does anything need to be initialized to an empty string?  Now's the time to do it.
	divErrors.innerHTML = "";
	divErrors.style.display = "block";// comment out to see what exactly this code does
	divOrder.innerHTML = "";

	// Version 2 
	// DO IT: If the name field is blank, display "Enter customer's name", set the focus and get out.
	if (txtName.value === "") {
		divErrors.innerHTML = "Enter customer's name";
		txtName.focus();
		return;
	}

	// Version 2  
	/* DO IT: Credit Card Code
		Use an IF statement to determine if the user selected the credit card option in the selPayment dropdown
		If they did, you need to do the following:
		    if the credit card number field was left blank or the contents of the field is not a number, display "Enter your 
		    card number using only digits" in divErrors, put focus on the card number field and get out.

		    if the month field was left blank or the contents of the field is not a number, display "You must enter a number 
		    for this field" in divErrors, put focus on the month field and get out.
		    if the month they entered is less than 1 or > 12, display "Card Month must be between 1 and 12", put focus on the 
		    month field and get out.
		    TIP:  Remember to convert the txtMonth value to a number before you do your comparison.

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

	// DO IT: Concatenate the appropriate msg into divOrder.  The Welcome msg is within an h3 tag.  Every other line is within 
	// a p tag.  The last line is in bold.
	/* Version 1:
		Do not include the user's name in the welcome message.
		Do not include the "Paid by" statement.
	*/
	divOrder.innerHTML += "<h3>Welcome to Rose's Deli, " + txtName.value + "</h3>";  
	divOrder.innerHTML += "<p>You have ordered a " + g_sSize + " " + g_sSandwich + " with <br>" + g_sExtras + "</p>"; 
	divOrder.innerHTML += "<p>Your Total is $" + g_nTotal + "</p>"; 
	divOrder.innerHTML += "<p>Paid by " + selPayment.value + "</p>";
	divOrder.innerHTML += "<p><strong>Have a nice day!</strong></p>"; 
	

} // function ProcessOrder