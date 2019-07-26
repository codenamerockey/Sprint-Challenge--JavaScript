// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

/* Explanation: Closure is the ability for a function to reach out of its function body and use variables outside it's immediate scope or function block. When the function named nested function is created inside the scope of the 'function' named myFunction  a closure is created and also a parent child relationship between nested function and myFunction giving nestedFunction access to any variables created within that scope of it's parent function/functions, it basically allows a function to remember the scope it has been created inside of, a reference so to speak  and allows usage of all variables inside that scope or reference of where it was created.*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
