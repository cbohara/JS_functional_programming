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

*/


bookstoreApp.subtractBookPrice = function(user, book){
  // check the user balance to make sure they have enough $$ to buy the book
  if (user.balance > book.price) {
  // if the balance is larger than the price, subtract the price from the users balance.
    user.balance = user.balance - book.price;
  } else {
    // else, alert the user that they don't have enough money to buy the book.
    alert("you don't have enough money to make this happen...");
  }
  // return the users balance
  return user.balance;
};


bookstoreApp.addBookToCart = function(user, bookStore, bookTitle){
  // loop through the bookStore array
  for (var i = 0; i < bookStore.length; i++){
    // check each books title against the bookTitle
    if (bookStore[i].title === bookTitle){
      // if the title of the book matches the input title push the current book to the users cart.
      user.cart.push(bookStore[i]);
      // user your subtractBookPrice function to subtract the price of the current book from the users balance.
      bookstoreApp.subtractBookPrice(user, bookStore[i]);
    }
  }

  return user.cart
};


bookstoreApp.emptyCart = function(user){
  // first let's check to see whether the users cart is empty
  if(user.cart.length === 0){
    // if so, alert the user that there are no books in their cart.
    alert('there are no books in your cart');

  } else {
    // if not, use a 'while loop' (look this up) and .pop to get rid of every book in the cart.
    while(user.cart.length > 0) {
      user.cart.pop();
    }
    // return the cart to the user
    return user.cart;
  }
};


bookstoreApp.deleteFromCart = function(user, bookTitle){
  for (var i = 0; i < user.cart.length; i++) {
    if (user.cart[i].title === bookTitle){
        var nextVal = i + 1
        var deletedEl = user.cart.splice(i, nextVal)[0];
    } 
  }

  return deletedEl
};


/* 

As you can see we have a Search Categories button with a couple of selectors that allow us to toggle through our various book categories. We need to build out the functionality that allows this to work on the Front-End.

Below you're going to create two functions, bookstoreApp.checkBookCategory and bookstoreApp.filterbyCategory. 


checkBookCategory will check a books category and will return a boolean based on whether the books category matches the input category.

filterByCategory will then use checkBookCategory to check each book in our Bookstore, and return a new array with only the books that match the category the user has decided they want.


*/

bookstoreApp.checkBookCategory = function(book, category){
    // check to see if the category in the book matches the input category
    if (book['category'] === category) {
      // return true if so
      return true;
    } else {
      // if not, return false.
      return false;
    }

};

// create test case;
var testBook = Bookstore[0];
// create a test you know will pass (all categories are randomized so you'll need this);
var passCategory = testBook['category'];
// make the test
var checkBookCategoryTest = bookstoreApp.checkBookCategory(testBook, passCategory);
// console lock it out
console.log(checkBookCategoryTest); // should return true;


bookstoreApp.filterByCategory = function(bookStore, category){
  // create a filteredList array that will store books that match our category.
  var filteredList = [];
  // loop through the bookStore array
  for (var i = 0; i < bookStore.length; i++) {
    // use our checkBookCategory function to check each books category against the input category
    if (bookstoreApp.checkBookCategory(bookStore[i], category)) {
      // if it passes, push the current book into the filteredList
      filteredList.push(bookStore[i]);
    }
  }
  // after going through each book, return the filteredList to the user
  return filteredList;
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
    // check to see if the author in the book matches the input author
    if (book['author'] === author) {
      // return true if so
      return true;
    } else {
      // if not, return false.
      return false;
    }
};

bookstoreApp.filterByAuthor = function(bookstore, author) {
  var filteredList = [];
  for (var i = 0; i < bookstore.length; i++) {
    if (bookstoreApp.checkAuthor(bookstore[i], author)) {
      filteredList.push(bookstore[i]);
    }
  }

  return filteredList;

};


/* 

Awesome! We're now able to filter by author and by category - but our users may be balling on a budget!

Complete the two functions below in the same way you created the ones above.

bookstoreApp.checkRange should take two numbers and a book, and will return a boolean based on whether the number cost of the book lands between (and including) the two numbers.

bookstoreApp.filterByRange should use checkRange to return new list w/ books that are inside of the range.

*/

bookstoreApp.checkRange = function(book, lowerEnd, upperEnd){
  
  if (book['price'] >= lowerEnd && book['price'] <= upperEnd) {
    return true;
  } else {
    return false;
  }
  
};


bookstoreApp.filterByRange = function(bookstore, lowerEnd, upperEnd){

  var filteredList = [];
  for (var i = 0; i < bookstore.length; i++){
    if (bookstoreApp.checkRange(bookstore[i], lowerEnd, upperEnd)) {
      filteredList.push(bookstore[i]);
    }
  }

  return filteredList;

};

}());


