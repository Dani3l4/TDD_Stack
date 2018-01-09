var chai = require('chai');
var CustomStack = require('../stack');

var expect = chai.expect;
var assert = chai.assert;

describe('Test stack', () => {
    var stack;

    beforeEach(function() {
        stack = new CustomStack(10);
    });

    describe('Newly created stack', () => {
        it('should start empty', () => {
            assert.isTrue(stack.isEmpty());
        });
    
        it('stack size should be 0', () => {
            assert.equal(stack.getSize(), 0);
        });
    });

    describe('Performing actions on a stack', () => {
        describe('Performing actions on a zero sized capacity stack', () => {
        });

        describe('Performing actions on an empty stack', () => {
            describe('Pushes', () => {
                it('should not be empty after pushing element', () => {
                    var pushedElement = 2;
                    stack.push(pushedElement);
                    assert.isFalse(stack.isEmpty());
                });
    
                it('stack size should be 2 after two pushes', () => {
                    var firstPushedElement = 3;
                    var secondPushedElement = 5;
            
                    stack.push(firstPushedElement);
                    stack.push(secondPushedElement);
    
                    assert.equal(stack.getSize(), 2);
                });
            });
        });

        describe('Performing actions on a non empty stack', () => {
            var firstPushedElement = 3;
            var secondPushedElement = 5;
            var thirdPushedElement = 6;
    
            beforeEach(() => {
                stack.push(firstPushedElement);
                stack.push(secondPushedElement);
                stack.push(thirdPushedElement);
            });

            describe('Pops', () => {    
                describe('Stack emptyness validation after all pops ', () => {
                    beforeEach(() => {
                        var timesToPop = stack.getSize();
                        for(let counter = 0; counter < timesToPop; counter++){
                            stack.pop();
                        }
                    });
    
                    it('should be empty after poping all elements', () => {
                        assert.isTrue(stack.isEmpty());
                    });
        
                    it('the size should be zero after poping all elements', () => {
                        assert.equal(stack.getSize(), 0);
                    });
                });
    
                it('pop element should return the last pushed element "thirdPushedElement"', () => {
                    assert.equal(stack.pop(),thirdPushedElement);
                });

                it('stack size should decrease by 2 after 2 pops', () => {
                    var prevSize = stack.getSize();
    
                    stack.pop();
                    stack.pop();
    
                    assert.equal(stack.getSize(), prevSize - 2);
                });
    
                it('should make sure that elements pop in reversed order', () => {
                    assert.equal(stack.pop(), thirdPushedElement);
                    assert.equal(stack.pop(), secondPushedElement);
                    assert.equal(stack.pop(), firstPushedElement);
                });
            });
    
            describe('Peek on top of the stack', () => {
                it('stack size should remain the same', () => {
                    var prevSize = stack.getSize();
                    stack.peek();
                    assert.equal(prevSize,stack.getSize());
                });
                it('should return the last pushed element: "thirdPushedElement"', () => {
                    assert.equal(stack.peek(),thirdPushedElement);
                });
            });
        });
    });

    describe('Check exceptions', () => {
        it('push element to a full stack, should throw "Overflow" exception', () => {
            var capacityOfOne = 1;
            var numberToPush1 = 8;
            var numberToPush2 = 9;

            var stack = new CustomStack(capacityOfOne);
            stack.push(numberToPush1);
            try{
                stack.push(numberToPush2);
            } catch(err){
                assert.equal(err.type,"overflow");
            }
        });
    
        it('pop element from an empty stack, should throw "Underflow" exception', () => {
            try{
                stack.pop();
            } catch(err){
                assert.equal(err.type,"underflow");
            }
        });
    });
});
