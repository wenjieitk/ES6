/**
 * regular function -> golbal
 * class /constructor /object /es6 method -> object
 */

 // normal approuch
 function createCircle(r) {
     return{
         r,
         draw(){
             console.log('d');
         }
     }
 }

 /**
  * this approuch
  * this = empty object
  * added r
  * added d
  * new -> create new object based on Circle
  */
 function Circle(r) {
     this.r = r;
     this.d = function() {
         console.log('d');
     }
 }

 const Circle = new Circle(1);


const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        },this) // pass 'this' to refer video object back to -> this; else 'this' refer to window/global coz inside foreach is regular function
    }
}

video.showTags();