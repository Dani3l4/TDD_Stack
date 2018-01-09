var StackErrors = new function(){
    var errors = this;

    errors.overflow = function(messageIn){
        return { type: "overflow", message: messageIn};
    };
    errors.underflow = function(messageIn){
        return { type: "underflow", message: messageIn};
    };
};

module.exports = StackErrors;