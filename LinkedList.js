let util = require('util')

class ListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = this.tail = new ListItem(value);
        this.size = 1;
    }
    append (value) {
        let newItem = new ListItem(value);
        newItem.prev = this.tail;
        this.tail.next = newItem;
        this.tail = newItem;
        this.size++;
    }
    prepend (value) {
        let newItem = new ListItem(value);
        newItem.next = this.head;
        this.head.prev = newItem;
        this.head = newItem;
        this.size++;
    }
    removeHead () {
        if (this.size > 1) {
            let removed = this.tail;
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return removed;
        }
        return null;
    }
    removeTail() {
        if (this.size > 1) {
            let removed = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return removed;
        }
        return null;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    getSize() {
        return this.size;
    }
}


let list = new LinkedList(6);
list.append(3);
list.append(9);
list.append(0);
list.prepend(7);
console.log(list.removeTail())
console.log(list.removeHead())
console.log(util.inspect(list, false, null, true))
console.log(list.getTail());
console.log(list.getHead());
console.log(list.getSize())