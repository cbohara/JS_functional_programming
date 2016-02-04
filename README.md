# Scopes and Intro to Functional Programming

## Overview:

So you just learned about scopes, huh? Good for you - you're are now transitioning toward more advanced JavaScript concept which means we'll also be introducing a new programming concept as well: Functional.

Functional programming is the act of separating - or, modularizing - our functionality so that we can have it work together in a reusable manner. It also serves as a great way to make your code more legible; instead of reading through lines of code in order to figure out what something does, what if we could just read the variable name and know instantly? 

Scope is important to functional programming because it makes this paradigm possible. If each function didn't have its own local scope it'd be a lot more difficult to change - or mutate - data without running into annoying bugs and erros.

Check out the example below:

``` 
  Let's use the 'range' function you created in the Algorithms Continued excerise:

  var range = function(num){
    // create a result array to collect the numbers
    var resultArray = [];
    // loop until the last number
    for(var i = 0; i < num; i++){
      // push each number into the array
      resultArray.push(i)
    }
    // return resultArray to the user
    return resultArray;

  };

```
  'Range' is an awesome function! It allows us to create an array very easily, and with very little code. 

  Now, what if we wanted to create functions that use 'range' to build more complicated functionality (or, features).


  Suppose I am creating a program that creates gameboards for Checkers and each coordinate is an array element. 

  My task is to create a 4 by 4 checker board:

```  
 [[0,1,2,3]  
  [0,1,2,3]
  [0,1,2,3]
  [0,1,2,3]]

    //PS: This is called a matrix, and array filled with arrays. It's very common to be working with matrixes in software engineering - think of 
    // them as lists inside of a list (can you imagine how large Wikipedia's matrix is?)

```

To accomplish this I'm going to need to create 4 arrays with coordinates, and push them into another array. 

I know that range accomplishes a lot of that for me, so here's how I'm going to solve it:

```
  // create four rows of arrays filled with zero through three
  var rowOne = range(4)
  var rowTwo = range(4)
  var rowThree = range(4)
  var rowFour = range(4)

  // push those arrays into our matrix aka checker board

  var checkerBoard = [];
  checkerBoard.push(rowOne, rowTwo, rowThree, rowFour);

  
  console.log(checkerBoard);

  /*
    [[0,1,2,3]
    [0,1,2,3]
    [0,1,2,3]
    [0,1,2,3]]
  */

```

  There we have it, a checkerboard! But what if we wanted to do this a lot more quickly, and with a lot more flexibility?

  What if, we wanted to be able to create checkerboards of all sizes, without writing more than one line of code?

  Good news: We can! We have the technology:


  As you learned, Scope allows us to pass variables into the local scopes of functions. You also learned
  that the 'child scope' has access to anything in the 'parent scope'. This means, that if we have
  a function inside of another function, the inner function has access to the variable you passed.

  What does that mean to us? Well, let's create a function boardMaker that uses the 'range' function
  to create rows in our checkerboard. That way, we don't have to repeatedly call range(4) and manually
  create our board.

  Example below:

  ```
 // boardMaker takes a number and creates a checkerboard (matrix) of the corresponding size.

   var boardMaker = function(num){
      // declare a board array to store our rows
      var board = [];

      // we can see each array as a row in our matrix, we need as many rows as specified.
      for (var i = 0; i < num; i++){
        // if we see each number as a column, we need to
        // add an array that has as many columns as rows.

        var row = range(num);
        // add the row to the board
        board.push(row);
      }

     // return the board to the user
     return board;
   }

```

  The reason we can pass the num variable to our range function is because it is in the local
  scope of the boardMaker function. It has 'child scope' privileges, which means 
  it can access any variable within, or passed into our boardMaker function. Scope!

  Now, why does this matter? Our boardMaker can not only create a 4 by 4 board easily:

```

  var fourByFour = boardMaker(4);
  console.log(fourByFour); 

    [[0,1,2,3]
    [0,1,2,3]
    [0,1,2,3]
    [0,1,2,3]]
 


```

We can also create any size board we want with just a flick of the wrist:

```

    var fiveByFive = boardMaker(5);
  console.log(fiveByFive); 

   [[0,1,2,3,4]
    [0,1,2,3,4]
    [0,1,2,3,4]
    [0,1,2,3,4]]

  var nineByNine = boardMaker(9);

  console.log(nineByNine); 
   [[0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]
    [0,1,2,3,4,5,6,7,8]]

```

That's the power of Functional Programming. We now have a powerful program that's
flexible and well named. We can do so much more than just create arrays - we've
graduated to creating boardgames!

That's what the next two weeks are about; now that you have the basics down it's about
augmenting your brain to think about programming in a functional way, instead of imperatively.



## Learning Goals:

 - Master Scope.
 - Continue to practice programming fundamentals & Algorithmic approach.
 - Begin to move toward functional programming.


## What you should be comfortable with:

 - Accessing and assigning arrays and objects.
 - Creating and invoking functions.
 - For loops, for in loops.
 - Pseudocoding, breaking down algorithms


 ## Assignment: BookStore

We now own the Bookstore that Susan (from Week 2) wanted to buy her books from and would like to 
create an app that allows our users to easily sift though our collection and buy
a book they like it.

The minimum viable product of our app does three things:

1. Allow our user to categorize our books by category and price.

2. Allow a user to search a specific book by author, etc.

3. Allow our user to add and delete books from their cart.

Your task is to build the functionality below  over the next two days so that we can start selling books online asap.

Here's a video of how the application is supposed to work: https://vimeo.com/154125213

Follow the directions in your introToFunctional.js file.

* [ ] Subtract Book Price
* [ ] Add Book To Cart
* [ ] Empty Cart
* [ ] Delete From Cart
* [ ] Check Book Category
* [ ] Filter By Category
* [ ] Check Author
* [ ] Filter By Author
* [ ] Check Range
* [ ] Filter By Range