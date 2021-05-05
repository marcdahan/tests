var x = 9;
const module = {
    x: 22,
    getX: function() { 
        return this.x;
      }
};

console.log(module.getX());//  returns 22
const retrieveX = module.getX;
console.log(retrieveX());// returns 9 therefore because the x is the one of the Window object
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); //returns 22