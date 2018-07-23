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

/**
 * abstract and scope
 * let in function = private
 */

 function cc(r) {
     this.radius = radius;
     
     let defaultLocation = {
         x: 0,
         y: 0
     };

     let computeLocation = function(f) {
         console.log('inside compute ',f);
         
     }

     this.draw = function() {
        // calling private function
        computeLocation(1);
        //calling private variable
        defaultLocation.x +=1;
        //calling cc variable
        this.radius +=1;
     }
 }

 const newcc = new cc();
 // only radius and draw can be access from outside