/**
 * - function*
 * - yield;
 * - .next()
 */


 /**
  * Scenario
  *      left           |            right
  *                     |       walking to store with money
  *           { <- walked into the store with cash }
  *     in the store    |
  *           { -> walked out the store with groceries }
  *                     |       with groceries
  *                     |       walking to the laundry
  *           { <- walked into the dobi with cash }
  *     in the dobi     |
  *           { -> walked out the dobi with clean clothes }
  *                     |       with clean clothes
  *                     |       headed back home
  */


// right side
 function* shopping() {
     const proccess1 = yield 'done process 1'; 

     // wlaking to laundry place
     const proccess2 = yield 'done process 2'; 

     // walking back home
     return [proccess1,proccess2];
 }

// left side
const gen = shopping(); // doesn't affect the shopping code

console.log (
    gen.next(), // { value: 'done process 1', done: false }
    gen.next('done process 1, now exe process 2'), // { value: 'done process 2', done: false }
    gen.next('done proceess 2, now returning result')  // { value: [ 'done process 1, now exe process 2','done proceess 2, now returning result' ],done: true }
);