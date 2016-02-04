(function() {
  'use strict';

  describe('Bookstore', function() {
    
    describe('User Functionality', function(){
      var Bookstore = window.Bookstore;
      var Kanye = window.Kanye;

      describe('Subtract Price', function() {
        it('should subtract the price of a book from the users balance', function(){
          var testBook = Bookstore[0];
          var endingBalance = Kanye.balance - testBook.price
          var testCase = bookstoreApp.subtractBookPrice(Kanye, testBook);
          console.log(testCase);
          console.log(endingBalance);

          expect(testCase).to.equal(endingBalance);
        }); 
      });



       describe('Add book to cart', function() {
        it('should add a book to the cart', function(){
          var testCase = bookstoreApp.addBookToCart(Kanye, Bookstore, 'Lucky Jim');
          expect(testCase[0].title).to.equal("Lucky Jim");
        }); 
       });

       describe('Empty Cart', function() {
        it('should remove all books from cart', function(){
           bookstoreApp.emptyCart(Kanye);
           expect(Kanye.cart.length).to.equal(0);

        }); 
       });


       describe('Delete one book from cart', function() {
        it('should delete the selected book from the cart', function(){
           bookstoreApp.addBookToCart(Kanye, Bookstore, 'Lucky Jim');
           bookstoreApp.addBookToCart(Kanye, Bookstore, "Flaubert's Parrot");
           var testCase = bookstoreApp.deleteFromCart(Kanye, 'Lucky Jim');
           console.log(testCase.title);
           expect(testCase.title).to.equal("Lucky Jim");
           expect(Kanye.cart.length).to.equal(1);

        }); 
       });

    })
    describe('Search Functionality', function() {
      
      var Bookstore = window.Bookstore

      describe('Check Book by Category', function() {
        it('should check a book category and return whether they match', function(){
          var testBook = Bookstore[0];
          var passCategory = testBook['category'];
          var checkBookCategoryTest = bookstoreApp.checkBookCategory(testBook, passCategory);
          var falseTest = bookstoreApp.checkBookCategory(testBook, 'good reads');
          expect(checkBookCategoryTest).to.equal(true);
          expect(falseTest)
        
        }); 

      });

      describe('Filter By Category', function() {
        it('should return an array filled with books that have a certain category', function(){
          var checkCategories = function(list, category){
            var state = true;
            for (var i = 0; i < list.length; i++) {
              if (!bookstoreApp.checkBookCategory(list[i], category)){
                return false;
              }
            }
            return state;
          };


          var testList = bookstoreApp.filterByCategory(Bookstore, 'horror');
          var trueIfPasses = checkCategories(testList, 'horror');
          expect(trueIfPasses).to.equal(true);
        
        }); 
      });


     describe('Check Book by Author', function(){
       it('should check a book for a specific author', function(){
         var testBook = Bookstore[0];
         var passAuthor = testBook['author'];
         var checkBookAuthorTest = bookstoreApp.checkAuthor(testBook, passAuthor);
         var falseTest = bookstoreApp.checkAuthor(testBook, 'Oprah');
         expect(checkBookAuthorTest).to.equal(true);
         expect(falseTest).to.equal(false);

       });

     });

     describe('Filter By Author', function() {
        it('should return an array filled with books that have a certain author', function(){
          
          var checkAuthor = function(list, author){

            var state = true;
            for (var i = 0; i < list.length; i++) {
              if (!bookstoreApp.checkAuthor(list[i], author)){
                return false;
              }
            }
            return state;
          };


          var testList = bookstoreApp.filterByAuthor(Bookstore, 'Martin Amis');
          var trueIfPasses = checkAuthor(testList, 'Martin Amis');
          expect(trueIfPasses).to.equal(true);
        });
      });

     describe('Check Range', function() {
        it('should return true or false as to whether the price falls within the range of the two input numbers', function(){
          var testBook = Bookstore[0];
          var checkBookRangeTest = bookstoreApp.checkRange(testBook, 5, 26);
          expect(checkBookRangeTest).to.equal(true);
        });
     });

     describe('Filter By Range', function() {
        it('should return an array filled with books that are between a certain price range', function(){
         
          var checkRange = function(list, lowerEnd, upperEnd){
            var state = true;
            for (var i = 0; i < list.length; i++) {
              if (!bookstoreApp.checkRange(list[i], lowerEnd, upperEnd)){

                return false;
              }
            }
            return state;
          };


          var testList = bookstoreApp.filterByRange(Bookstore, 9, 15);
          var trueIfPasses = checkRange(testList, 9, 15);
          expect(trueIfPasses).to.equal(true);
        });
      });
    }); 

  });

}());
