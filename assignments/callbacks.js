// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Higher Order
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);

}
//Invocation
getLength(items, function(howLong){

  console.log(`The array length is: ${howLong}`);

});

//Higher Order
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

//Invocation
last(items, function(lastItem){
  console.log(`The last item of the array is: ${lastItem}`);
});


//////////ONE WAY//////////////////////////////////////////////////////////
//Higher Order
function sumNums1(x,y,cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x,y);
}

//Callback
function add(num1,num2){
  console.log(num1+num2);
};

//Invoke it
sumNums1(6,1,add);
//////////////////////////////////////////////////////////////////////////

//////////Another Way to Invoke//////////////////////////////////////////////////////////

//Higher Order
function sumNums(x,y,cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
};

//Invocation
sumNums(22,2,function(sumItUp){
  console.log(`The Sum of these numbers is: ${sumItUp}`);
});

////////////////////////////////////////////////////////////////////////
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

//Invoked
multiplyNums(2,9,function(multiplied){
  console.log(`The Product of these numbers is:  ${multiplied}`);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(items.includes('yo-yo')){
    return cb(true);
  }
  else{
    return cb(false);
  }
};

//Invoked

contains('yo-yo', items, function(checkForYoYo){
  console.log(`Is yo-yo in the given array?  ${checkForYoYo}`)
});

/* STRETCH PROBLEM */

/*function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}*/
