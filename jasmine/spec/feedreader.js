/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements--this 
 * ensures they don't run until the DOM is ready.
 */
$(function() {
   
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         
         it('has a URL', function(){
       
           for (var i=0; i<allFeeds.length; i++){
         
           expect(allFeeds[i].url).toBeDefined();
           expect(allFeeds[i].url).not.toBe('');
      }
      });

        /* TODO: This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a defined name', function(){
        for (var i=0; i<allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name).not.toBe('');
        }
      });
      });

         // This test ensures the menu element is
         // * hidden by default.

    describe('The menu', function() {
        it('is hidden by default', function(){
              expect(document.body.classList).toContain("menu-hidden");
                //console.log(document.body.classList);
            });
           
                  
          // This test ensures the menu changes
          // * visibility when the menu icon is clicked. This test
          // * has two expectations: does the menu display when
          // * clicked and does it hide when clicked again.
          

        it('shows when icon is clicked', function(){
                 $(".menu-icon-link").trigger('click');
                expect(document.body.classList).not.toContain("menu-hidden")
                //console.log(document.body.classList);
                   
               })
        it('hides when icon is clicked again', function(){
                 $(".menu-icon-link").trigger('click');
                 expect(document.body.classList).toContain("menu-hidden");
             //console.log(document.body.classList);
            })
       
    });
        /* This test suite ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Since loadFeed() is asynchronous this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done){
          loadFeed(0, function(){
           // console.log($('.feed').html());
            done();//signals 'beforeEach' has finished all its asynchronous tasks 
        });
       });   
        it('should have at least one entry in feed container', function(){
            var entryList= document.querySelectorAll('.feed .entry');
           //above selects using ('.parent .child') 
              expect(entryList.length).toBeGreaterThan('0');
            //console.log(entryList.length);              
           });                  
       });    
    
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.    
         */
    describe('New Feed Selection', function() { 
            beforeEach(function(done){      
         loadFeed(0, function(){
            feedOne = $('.feed').html();
              
          loadFeed(1, function(){
            feedTwo = $('.feed').html(); 
            done();
           }) 
        });   
        });        
        it('should load new content', function(done){
                 
              expect(feedOne.length).not.toEqual(feedTwo.length);
              done();  
             })
      });        
}());
