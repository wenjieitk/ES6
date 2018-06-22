var ladders = [
    {id:1,height:20},
    {id:3,height:25}
]

function findWhere(array, criteria) {
    var property = Object.keys(criteria)[0];
    console.log(property);
      return array.find(function(item){
          return item[property] === criteria[property]
      });
    }

console.log(
    findWhere(ladders, {height:25})
);
