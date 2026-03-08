class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        if (value !== null && value !== undefined) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
}

const myLinkedList = new LinkedList(0);
console.log(myLinkedList);