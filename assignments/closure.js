// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function numberGenerator(number){
  let rando = number + Math.random();
  console.log(`Here is a random number: ${rando}`);
  debugger;

  //Rando is Closed -- Not Accessible
  function randomNumberDividedByTwo(){
    console.log(`Random number divided by two: ${rando/2}`);
    debugger;
  }

  randomNumberDividedByTwo();
}

numberGenerator(4);



// ==== Challenge 2: Create a counter function ====
let newCounter = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  
  function countItUp(){
    newCounter ++;
    return newCounter;
  }
  countItUp(); 
};

counter();


console.log(newCounter)



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
