
class Stack {
    constructor() {
        this._stack = [];
    }
    push(el) {
        this._stack.push(el);
    }
    pop() {
        return this.isEmpty() ? 'Stack is empty!' : this._stack.pop();
    }
    peek() {
        return this.isEmpty() ? 'Stack is empty!' : this._stack[this._stack.length-1];
    }
    isEmpty() {
        return this._stack.length == 0;
    }
    size() {
        return this._stack.length;
    }
}

let newStack = new Stack();
console.log(newStack.isEmpty());
newStack.push(1);
newStack.push(4);
newStack.push(5);
newStack.push(4);
console.log(`peek: ${newStack.peek()}`)
console.log(`peek: ${newStack.peek()}`)
console.log(newStack.isEmpty());
console.log(`pop: ${newStack.pop()}`)
console.log(`pop: ${newStack.pop()}`)
console.log(`pop: ${newStack.pop()}`)
console.log(`pop: ${newStack.pop()}`)
console.log(`pop: ${newStack.pop()}`)
console.log(`pop: ${newStack.pop()}`)
console.log(newStack.peek())
