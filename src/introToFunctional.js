(function() {
  'use strict';

  window.bookstoreApp = {};

/*


*/

 
// Do not touch this variable, it is your Boostore and you can use this to test your code as you go along.

var Bookstore = window.Bookstore;

var Kanye = window.Kanye;

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
 
};


bookstoreApp.addBookToCart = function(user, bookStore, bookTitle){
};


bookstoreApp.emptyCart = function(user){

};


bookstoreApp.deleteFromCart = function(user, bookTitle){
 
};


/* 

As you can see we have a Search Categories button with a couple of selectors that allow us to toggle through our various book categories. We need to build out the functionality that allows this to work on the Front-End.

Below you're going to create two functions, bookstoreApp.checkBookCategory and bookstoreApp.filterbyCategory. 


checkBookCategory will check a books category and will return a boolean based on whether the books category matches the input category.

filterByCategory will then use checkBookCategory to check each book in our Bookstore, and return a new array with only the books that match the category the user has decided they want.


*/

bookstoreApp.checkBookCategory = function(book, category){
 
};


bookstoreApp.filterByCategory = function(bookStore, category){

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

};

bookstoreApp.filterByAuthor = function(bookstore, author) {
};


/* 

Awesome! We're now able to filter by author and by category - but our users may be balling on a budget!

Complete the two functions below in the same way you created the ones above.

bookstoreApp.checkRange should take two numbers and a book, and will return a boolean based on whether the number cost of the book lands between (and including) the two numbers.

bookstoreApp.filterByRange should use checkRange to return new list w/ books that are inside of the range.

*/

bookstoreApp.checkRange = function(book, lowerEnd, upperEnd){
  
};


bookstoreApp.filterByRange = function(bookstore, lowerEnd, upperEnd){

};

}());


