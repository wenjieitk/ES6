/**
 * - function*
 * - yield;
 * - .next()
 */


 /**
  * Scenario
  *                     |       walking to store
  *                     |       still walking
  *                     |       at the store, go in with money
  *                { <- cash }
  *     in the store    |       
  *              { groceries -> }
  *                     |       back with groceries
  *                     |       headed back home
  */


 function* shopping() {
     // stuff on the sidewalk

     //walking down the sidewalk

     //go into the store with cash
     const stiffFromSotre = yield 'cash'; // pause here and let the existing iteration finish

     // walking back home
     return stiffFromSotre;
 }

// stuff in the store
const gen = shopping(); // doesn't affect the code

console.log (
    gen.next()// (start exe the code) leaving house
    // walked into the store
    // walking up and down...
    // purchase the stuff
); 

console.log (
    gen.next('groceries') // leaving the store with groceries
);