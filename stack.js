var stackErrors = require('./stack-errors');

var CustomStack = (function(capacityIn){
    
    var capacity = capacityIn;
    var size = 0;
    var isEmpty = true;
    var elements = [];

    this.getSize = function(){
        return size;
    };
    
    this.getCapacity = function(){
        return capacity;
    };

    this.isEmpty = function(){
        return isEmpty;
    };

    this.push = function(elementToPush){
        if(size == capacity){
            throw stackErrors.overflow();
        }
        elements[size++] = elementToPush;
        isEmpty = false;
    };

    this.pop = function(){
        if(size == 0){
            throw stackErrors.underflow();
        }
        if(size == 1){
            isEmpty = true;
        }
        return elements[--size];
    };

    this.peek = function(){
        var topElementIdx = size - 1;
        return elements[topElementIdx];
    };
});
module.exports = CustomStack;