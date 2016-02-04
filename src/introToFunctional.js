(function() {
  'use strict';

  window.bookstoreApp = {};

/*


*/

 
// Do not touch this variable, it is your Boostore and you can use this to test your code as you go along.

var Bookstore = window.Bookstore;
// console.log('bookstore',Bookstore); 
// bookstore is an array of the books
var Kanye = window.Kanye;
// console.log('kanye',Kanye);
// kanye is an object with 3 properties- balance, cart, and name
/*

Kanye wants to buy some books, so first we're going to focus on making sure our user can add books to their cart, and empty all the books if need be.

First and foremost, you should investigate (console.log) the user object (Kanye) and the Bookstore array (as well as the books in it) to make sense of which properties you'll need to access to build your functionality.

The three functions we're going to build to make this happen are laid out below. It may seem counter intuitive to build bookstoreApp.subtractBookPrice first, but it'll make sense in a bit.

subtractBookPrice will subtract the price of a book from the users balance. If the user doesn't have enough money to add a book to their cart, alert them that they're not balling enough to buy the book. Make sure you return the users balance.

addBookToCart will search through the Bookstore for the book with the matching title. If there's a matching title add the book to the users cart. After adding the book to the users cart, subtract the price of the book from the users balance **hint hint, you have a function that does this for you**. Make sure you return the users cart.

emptyCart will first check to see if the users cart is empty, if so, alert them that there are no books in the cart. If not, empty every element out of the cart (use a while loop if you are brave). Make sure to return the users cart.

deleteFromCart will go through the users cart and check whether the input title matches any of the books. If the input title does match, take that element out of the cart and return it to the user.

*/


bookstoreApp.subtractBookPrice = function(user, book){
 	if(user.balance < book.price){
 		// alert not enough money to buy book
		alert('There is not enough money in your account to buy this book');
	}
	else {
 	// subtract the price of a book from the users balance
 	user.balance -= book.price;
	}
	return user.balance;
};
												
bookstoreApp.addBookToCart = function(user, bookStore, bookTitle){
	// search through the Bookstore for the book with the matching title
	for(var i = 0; i < bookStore.length; i++){
		if(bookStore[i].title === bookTitle){
			// add the book to the users cart
			user.cart.push(bookStore[i]);
			// subtract the price of the book from the users balance
			bookstoreApp.subtractBookPrice(user, bookStore[i]);
		}
	}
	// return users cart
	return user.cart;
};

bookstoreApp.emptyCart = function(user){
	// first check to see if the users cart is empty
	if(user.cart.length === 0){
		// alert them that there are no books in the cart
		alert('There are no books in the cart.');
	}
	else{
		// empty user cart
		user.cart = [];
	}
	// return the users cart
	return user.cart;
};

bookstoreApp.deleteFromCart = function(user, bookTitle){
 	// go through the users cart
 	for(var i = 0; i < user.cart.length; i++){
 		// check whether the input title matches any of the books in the user cart
 		if(user.cart[i].title === bookTitle){
 			// take the book out of the user cart if the input title matches
 			var returnBook = user.cart[i];
 			user.cart.splice(i,1);
 		}
 	}
 	// return the book that was deleted from the user cart
 	return returnBook;
};

/* 

As you can see we have a Search Categories button with a couple of selectors that allow us to toggle through our various book categories. We need to build out the functionality that allows this to work on the Front-End.

Below you're going to create two functions, bookstoreApp.checkBookCategory and bookstoreApp.filterbyCategory. 


checkBookCategory will check a books category and will return a boolean based on whether the books category matches the input category.

filterByCategory will then use checkBookCategory to check each book in our Bookstore, and return a new array with only the books that match the category the user has decided they want.


*/

bookstoreApp.checkBookCategory = function(book, category){
	// return boolean to determine if the books category matches the 
	// user input category
	if(book.category === category)
		return true;
	else
		return false;
 
};


bookstoreApp.filterByCategory = function(bookStore, category){
	// create new array that will contain the bookstore books that match the
	// category the user is searching for
	var categoryMatch = [];
	for(var i = 0; i < bookStore.length; i++){
	// use checkBookCategory to check each book in our Bookstore 
	// if the bookstore book's category matches the user input category, 
	// then add the book to and return the categoryMatch array
		if(bookstoreApp.checkBookCategory(bookStore[i].category,category)){
			categoryMatch.push(bookStore[i]);
		}
	}
	return categoryMatch;
};

/* 

Great! We've now figured out our filter functionality for categories. 

If you are passing the tests, give your new feature a test run by picking a category and hitting the 'Search Categories' button.

Next, we're going to create similar filter functionality for our 'Search By Author' feature. 

bookstoreApp.checkAuthor and bookstoreApp.filterByAuthor are very similar to what you built above so we won't explain how it works. We will also leave out the pseudocoded steps so you'll have to do that yourself :).

Complete the below functionality and, when you pass the tests, take it for a test spin.

PS: You can use 'JL Carr' as a test input for your search. 

*/

bookstoreApp.checkAuthor = function(book, author){
	// return boolean to determine if the books author matches the 
	// user input category
	if(book.author === author)
		return true;
	else
		return false;
 
};

bookstoreApp.filterByAuthor = function(bookStore, author) {
	// 									^had to fix capitalization
	// create new array that will contain the bookstore books that match the
	// author the user is searching for
	var authorMatch = [];
	for(var i = 0; i < bookStore.length; i++){
	// use checkAuthor to check each book in our Bookstore 
	// if the bookstore book's author matches the user input category, 
	// then add the book to and return the authorMatch array
		if(bookstoreApp.checkAuthor(bookStore[i].author,author)){
			authorMatch.push(bookStore[i]);
		}
	}
	return authorMatch;
};

/* 

Awesome! We're now able to filter by author and by category - but our users may be balling on a budget!

Complete the two functions below in the same way you created the ones above.

bookstoreApp.checkRange should take two numbers and a book, and will return a boolean based on whether the number cost of the book lands between (and including) the two numbers.

bookstoreApp.filterByRange should use checkRange to return new list w/ books that are inside of the range.

*/
bookstoreApp.checkRange = function(book, lowerEnd, upperEnd){
	// if the book price is within the users price range, return true
	if(lowerEnd <= book.price && upperEnd >= book.price)
		return true;
	else
		return false;
};


bookstoreApp.filterByRange = function(bookStore, lowerEnd, upperEnd){
	// 									^fixed capitalization
	// create new array that will contain the bookstore books that are within
	// the users price range
	var priceRangeMatch = [];
	for(var i = 0; i < bookStore.length; i++){
	// use checkRange to check each book in our Bookstore 
	// if the bookstore book's price is within the users price range, 
	// then add the book to and return the priceRangeMatch array
		if(bookstoreApp.checkRange(bookStore[i].price,lowerEnd,upperEnd)){
			priceRangeMatch.push(bookStore[i]);
		}
	}
	return priceRangeMatch;
};

}());


