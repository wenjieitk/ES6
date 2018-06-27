class Monster {
    constructor(options){
        this.name = options.name;
        this.health = 100;
    }
  }
  const godzilla = new Monster({name: 'Godzilla'});
   
   
  godzilla;           //{"name":"Godzilla","health":100}
  godzilla.name       //godzilla
  godzilla.health    //100


  /*****************************************************************************/

  class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster {
      constructor(options){
          super(options)
      }
      bite(other){
          other.health -= 10
      }
  }
  
  const snake1 = new Snake({name: 'Nagini'});
  const snake2 = new Snake({name: 'Snek'});
  snake1.bite(snake2)
    
  console.log(
    snake2
  );
  
  
  