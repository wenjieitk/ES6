/**
 *  ...variable
 */


 // rest
 const addNumbers = (...numbers) => {
     return numbers.reduce((sum,number) => {
         return sum+number;
     },0);
 }

 console.log(
    addNumbers(1,2,3,4,5,6,7,8)
 );
 

 //spread

 const defaultColors = ['red', 'green'];
 const favorColors = ['orange','yellow'];
 const fallColors = ['fire red','fall orange'];

 console.log(
     ['blue', ...fallColors,...favorColors,...fallColors]
 ); //[ 'blue','fire red','fall orange','orange','yellow','fire red','fall orange' ]