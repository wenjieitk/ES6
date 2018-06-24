/**
 * to verify/check if parathensis aligment is correct
 * !string.split -------> if return !== 0, then false
 */

 function balancedParans(string) {
     return string.split("").reduce((previous, char) => {
         if(previous < 0) {
            console.log(previous);
            return previous;
         }
         else if(char === "(" ){
            console.log(previous);
            return ++previous;
         } 
         else if(char === ")"){
            console.log(previous);
            return --previous;
         }

         return previous;
     }, 0);
 }

 let result = balancedParans("");

 console.log(result);