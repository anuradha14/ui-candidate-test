     // Example unit test function
     function divide( a, b ) {
          retrun a / b;
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
  return str. reverse();
}

        

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
          return Math.min.apply(values); // FILL THIS IN
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
       var arr;
       for(var i=0;i < values.length;i++){
            if(!arr.contains(values[i])){
                 arr.push(values[i]);
            }
       } return arr;      // FILL THIS IN
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(i=0;i<=100;i++)
{
If(i/3==0 && i/5==0)
{
Console.write(“FizzBuzz\n”)
}else if(i/3==0)
{
Console.write(“Fizz\n”)
}else if(i/5==0)
{
Console.write(“Buzz\n”) 
} else
{
Console.write(i); 

}
}

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
     var newFruits = [],
    fToRemove = {}
  ;
  for (var fruitNo = fruitsToRemove.length - 1; fruitNo >= 0; fruitNo--) {
    fToRemove [fruitsToRemove [fruitNo]] = 1;
  }
  for (var fruitNo = -1; ++fruitNo < fruits.length;) {
    var fruit = fruits [fruitNo];
    if (!fToRemove [fruit]) newFruits.push (fruit);
  }
  return newFruits;
         
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
           if (toPush instanceof Array) {
    for (var elementNo = -1; ++elementNo < toPush.length;) {
      array.push (toPush [elementNo]);
    }
  } else {
    array.push (toPush);
  }

     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if(sourceStr.split(‘,’).lenght>0)
{
return sourceStr.split(‘,’);
}
Else
{
return ;

}
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         Var sourceStr=str;
         public static boolean isWhitespace(String str) {
      if (str == null) {
          return false;
      }
      int sz = str.length();
      for (int i = 0; i < sz; i++) {
          if ((Character.isWhitespace(str.charAt(i)) == false)) {
              return false;
          }
      }
      return true;
  }

     }

     // write an example of a javascript closure
     var add = (function () {
    var count = 0;
    return function () {return count += 1;}
})();

add();
add();
add();

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
      "people":
          [
          {"firstName":"tom", "lastName":"smith", "city":"Albany", "state":"NY","zip":00000,
          "phone numbers": [
               {"home":"22222","work":"55555", "mobile":"88888"}
               ]}];


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
