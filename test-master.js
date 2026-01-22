(function(){

    QUnit.test( "Our First Test", function( assert ) { // num 1
      var value = "hello tests";
      var some_number = 484;
  
      //                     ┌ Change this to what it should be
      assert.equal( value, 'hello tests'); // print hello tests here
      //                           ┌ Change this to what it should be
      assert.equal( some_number, "484"); // print 484 here
    });
  
    QUnit.test("Functions can access/modify variables in parent scope.", function(assert){ // num 2
      var outside_the_function = null;

      function yay(){
        var inside_the_function = "can you see me?";
        outside_the_function = inside_the_function; 
      }
  
      yay();
  
      assert.equal(outside_the_function, "can you see me?"); // print can you see me here?
    });
  
    QUnit.test("Function Parameters become scoped to the function.", function(assert){ // num 3
  
      function yay(param){
        assert.equal(param, "a fine kettle of fish"); // print a fine kettle of fish here
      }
  
      yay("a fine kettle of fish");
    });
  
    QUnit.test("A functions local scope is not available in an outer scope.", function(assert){ // num 4
      function yay(){
        var kix = "kid tested mother approved";
        assert.equal(kix, "kid tested mother approved"); // print kid tested mother approved here 
      }
      yay();
      
      var has_kix;
      // NOTE:
      // "this" is a special object that by default represents the global scope.
      // variables declared globally are stored as a property on the object: this.<variable>
      // if the variable is not global then this.<variable> will be undefined
      if(this.kix !== undefined){
        has_kix = kix;
      } else {
        has_kix = "i prefer cheerios";
      }
      assert.equal(has_kix, "i prefer cheerios"); // print i prefer cheerios here
    });
  
    QUnit.test("Functions don't have access to eachothers scope", function(assert){ // num 5
      function yay(){
        var from_yay = "i'm inside yay;";
      }
  
      function foo(){
        var in_foo = "i'm in foo";
        if(this.from_yay !== undefined){
          in_foo = this.from_yay;
        }
        assert.equal(in_foo, "i'm in foo"); // print i'm in foo here 
        assert.equal(this.from_yay, undefined); // print undefined here
      }
      yay();
      foo();
    });
  
    QUnit.test("Inner scope variables override outter scope variables.", function(assert){ // number 6
  
      var peanuts = 300;
  
      function yay(){
        var peanuts = "roasted";
  
        assert.equal(peanuts, "roasted"); // print roasted here
      }
      yay();
  
      assert.equal(peanuts, "300"); // print 300 here
    });
  
    QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){ // number 7
      function yay(){
        if(this.counter !== undefined){
          counter = counter + 1;
        } else {
          var counter = 10;
        }
      }
  
      yay();
      assert.equal(this.counter, undefined); // print undefined here
      yay();
      assert.equal(this.counter, undefined); // print undefined here
      yay();
      assert.equal(this.counter, undefined); // print undefined here
    });
  
    QUnit.test("Inner scope can access outer scope", function(assert){ //number 8
      var im_outside = "alpha";
      function yay(){
        var im_inside = "omega";
        return im_outside + im_inside;
      }
  
      assert.equal(yay(), "alphaomega"); // print alphaomega here
    });

  
    QUnit.test("Functions retain outer scope references between calls.", function(assert){ // num 9
      var im_outside = 13;
      function yay(){
        im_outside += 1;
      }
  
      yay();
      assert.equal(im_outside, "14"); // print 14 here
      yay();
      assert.equal(im_outside, "15"); // print 15 here
    });

  
    QUnit.test("We can do goofy stuff with outer scope", function(assert){ // num 10
  
      var hello = "greg";
      var name = "";
  
      function yay(){
        name += hello;
      }
  
      yay();
      assert.equal(name, "greg"); // print greg here
      yay();
      assert.equal(name, "greggreg"); // print greggreg here
      yay();
      assert.equal(name, "greggreggreg"); // print greggreggreg here
    });
  
    QUnit.test("We can pass functions to other functions and then run them.", function(assert){ // num 11
      var im_outter = 10;
      function yay(){
        im_outter /= 5;
      }
      function something(whatever){
        im_outter *= 20;
        whatever();
      }
      something(yay);
      assert.equal(im_outter, "40"); // print  40
  
    });
  
    QUnit.test("We can get crazy with returns.", function(assert){ // num 12
      function yay(){
        return " is dog";
      }
      function foo(whatever){
        return "hello, this" + whatever();
      }
      assert.equal(foo(yay), "hello, this is dog"); // print hello, this is dog here
    });
  
  })();