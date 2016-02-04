(function(){

  document.addEventListener("DOMContentLoaded", function(event) { 
  	var Kanye = window.Kanye;
  	var bookstoreHelpers = window.bookstoreApp;
	var bookContainer = document.getElementById('bookList');
	var Bookstore = window.Bookstore;
	
	var categoryButton = document.getElementById('categoryFilter');
	var authorButton = document.getElementById('authorButton');
	var priceRangeButton = document.getElementById('priceRangeButton');
	var emptyCartButton = document.getElementById('empty-cart');
	
	var addUserNameToPage = function(user) {
		var el = document.createElement('LI');
		var aTag = document.createElement('a');
		aTag.innerText = user.name
		el.appendChild(aTag)
		var insert = document.getElementById('insertNodes');
		insert.appendChild(el);
	};


	var addUserBalanceToPage = function(user) {
		var el = document.createElement('LI');
		var aTag = document.createElement('a');
		aTag.innerText = user.balance
		// console.dir(aTag);
		el.appendChild(aTag)
		var insert = document.getElementById('insertNodes');
		insert.appendChild(el);
	};

	var addItemsToCart = function(inputCart){
		var cart = document.getElementById('cart');

		while(cart.firstChild) {
			cart.removeChild(cart.firstChild);
		}

		for(var i = 0; i < inputCart.length; i++) {
  		  var el = document.createElement('LI');
		  var aTag = document.createElement('a');
		  aTag.innerText = inputCart[i].title;
		  // aTag.classList.push('cart-item');
		  el.appendChild(aTag)
	  	  cart.appendChild(el);
		}
	};

	var emptyCart = function(inputCart){
		
		if (!inputCart.length) {
		  var cart = document.getElementById('cart');

		  while(cart.firstChild) {
      		cart.removeChild(cart.firstChild);
	  	  }

		} else {
		  console.log("")
		}

	};


	addUserNameToPage(Kanye);
	addUserBalanceToPage(Kanye);


	var addBookToList = function(book){
		// separate attributes of our book into 4 sections
		var bookTitle = book.title;
		var bookAuthor = book.author;
		var bookCategory = book.category;
		var bookPrice = book.price;
		// add them to the output string we want to show in the page
		var text = bookTitle + ' by ' + bookAuthor + " This book is placed in the " + bookCategory.toUpperCase() + " category." + " Cost: " + bookPrice;
		// create a text node that translates our javascript to html
		var textNode = document.createTextNode(text);
		// creates a list element to add to our list
		var listElement = document.createElement("a");
		// adds our text to the our list element
		listElement.innerText = text;
		// wraps our element in a div so that it's more easily separated from the others
		var listWrapped = document.createElement('div').appendChild(listElement);
		// adds a class to each list div so that we can use our CSS to augment each list item
		listWrapped.classList.add('book');
		listWrapped.classList.add("list-group-item")
		// adds the final list item to the list
		// bookContainer.appendChild()
		bookContainer.appendChild(listWrapped);
	};

	// uses loops through our bookstore array and adds each book to the list.
	var addBooksToList = function(bookStore){
		
		bookStore.forEach(addBookToList)

	};
	
	// adds our books to the page
	addBooksToList(Bookstore);

	// makes sure when we press 'submit' the page doesn't reload
	function validateForm(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
    	e.returnValue = false;
    };

    // grabs our category form on line 16 of our index.html
	var categoryForm = document.getElementById('categoryForm');
	
	// adds a listener: when the submit button is clicked, don't reload the page.
	categoryForm.addEventListener('submit', validateForm, false);

	// adds an event listener when we click the button
	categoryButton.addEventListener('click', function(e){
	  // gets the current category
	  var currentCategory = categoryForm.getElementsByTagName('select')[0].value
	  
	  // remove all of the elements from the page
	  while(bookContainer.firstChild) {
      	bookContainer.removeChild(bookContainer.firstChild);
	  }
	  //create new array using bookstoreHelpers built by TGP student
	  var filteredArray = bookstoreHelpers.filterByCategory(Bookstore, currentCategory);
	  // add filtered elements
	  addBooksToList(filteredArray);

	});


	var authorForm = document.getElementById('authorForm');

	// adds a listener: when the submit button is clicked, don't reload the page.
	authorForm.addEventListener('submit', validateForm, false);


	authorButton.addEventListener('click', function(e){
	  var currentAuthor = authorForm.getElementsByTagName('input')[0].value

	  authorForm.getElementsByTagName('input')[0].value = ' '

	  if (currentAuthor === ''){
	  	alert('please insert an author');

	  	authorForm.getElementsByTagName('input')[0].value = ' '
	  	return;

	  }
	  // remove all of the elements from the page
	  while(bookContainer.firstChild) {
      	bookContainer.removeChild(bookContainer.firstChild);
	  }
	  //create new array using bookstoreHelpers built by TGP student
	  var filteredArray = bookstoreHelpers.filterByAuthor(Bookstore, currentAuthor);
	  // add filtered elements
	  addBooksToList(filteredArray);

	});

	var priceForm = document.getElementById('priceRange');
	
	priceForm.addEventListener('submit', validateForm, false);

	priceRangeButton.addEventListener('click', function(e){

		var lowerRange = JSON.parse(document.getElementsByTagName('input')[1].value);
		var upperRange = JSON.parse(document.getElementsByTagName('input')[2].value);

		if (typeof lowerRange !== 'number' || typeof upperRange !== 'number') {
			alert('please enter a price range');
		} else if (lowerRange > upperRange) {
			alert('your lower range is larger than your upper range. please enter an accurate price range');
		}

		while(bookContainer.firstChild) {
      	  bookContainer.removeChild(bookContainer.firstChild);
	    }

	    var filteredArray = bookstoreHelpers.filterByRange(Bookstore, lowerRange, upperRange);

	    addBooksToList(filteredArray);
	});

	bookContainer.addEventListener('click', function(e){
		if (e.target !== e.currentTarget) {
			var clickedItem = e.target
			var text = clickedItem.innerText;
			var userInput = confirm('Would you like to add ' + text + ' to your cart?');
			var bookTitle = text.split('by')[0].trim();
			var price = JSON.parse(text[text.length - 2].toString() + text[text.length - 1].toString());

			if (userInput) {
				var insert = document.getElementById('insertNodes');
				// get rid of the current balance
				insert.removeChild(insert.children[2]);
				// re apply new balance 
				addUserBalanceToPage(Kanye);
				bookstoreHelpers.addBookToCart(Kanye, Bookstore, bookTitle);
				addItemsToCart(Kanye.cart);
			}
		}
		e.stopPropagation();
	});

	// Empty cart functionality

	emptyCartButton.addEventListener('click', function(e){
		// prompt the user abou whether they'd like to empy their cart
		var userInput = prompt("are you sure you want to empty your cart? If so, please type yes.")
		if (userInput === 'yes') {
		// if the user input is 'yes' empty the cart
		   emptyCart(bookstoreHelpers.emptyCart(Kanye));
		} 
	});


	
	var cart = document.getElementById('cart');

	// Delete element from cart.

	cart.addEventListener('click', function(e){
		// makes each element clickable
		if (e.target !== e.currentTarget) {
			// access the clicked element
			var clickedItem = e.target
			// get the string value of the element
			var text = clickedItem.innerText;
			// get the title out of the string value of the element.
			var bookTitle = text.split('by')[0].trim();
			// ask the user whether they'd like to delete the element
			var userInput = confirm("Would you like to delete this book from the cart?");
			// if the user input is true
			if (userInput) {

				// delete the element from the cart
				bookstoreHelpers.deleteFromCart(Kanye, bookTitle);
				// cart should be spliced w/o the value, add the remaining items to the cart.
				addItemsToCart(Kanye.cart);
			}
		}
		e.stopPropagation();
	});


    
  });


})();