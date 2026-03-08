class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        if (value !== null && value !== undefined) {
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }

    print(node) {
        let temp = node ? node : this.head;
        let result = [];

        while (temp) {
            result.push({
                value: temp.value,
                prev: temp.prev ? temp.prev.value : null,
                next: temp.next ? temp.next.value : null,
            });
            temp = temp.next;
        }

        console.log(result);
    }

    push(value) {
        const newNode = new Node(value);
        // case 1: head is null
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        // case 2: head is not null
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    pop() {
        if (!this.head) return undefined;

        const temp = this.tail;

        // case: only one node
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        // case 1: no node
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            //case 2: one node or multiple node is present
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }

   shift() {
    // case 1: no node
    if (!this.head) return undefined;

    const temp = this.head;

    // case 2: one node 
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        // case 3: multiple node
        this.head = temp.next;
        this.head.prev = null;
        temp.next = null; // detach
    }

    this.length--;
    return temp;
}
}

let doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.print();
doublyLinkedList.push(1);
doublyLinkedList.print();
const poppedElm = doublyLinkedList.pop();
doublyLinkedList.print(poppedElm);
doublyLinkedList.print();
doublyLinkedList.unshift(11111);
doublyLinkedList.print();
const ans = doublyLinkedList.shift();
doublyLinkedList.print(ans);
doublyLinkedList.print();