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

    print(node) {
        if (node) {
            console.log(JSON.stringify(node))
        } else {
            console.log(JSON.stringify(this));
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    pop() {
        // case 1: 0 node 
        if (this.head === null) {
            return undefined;
        }

        // case 2: 1 node
        if (this.head.next == null) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }

        // case 3: multiple nodes 
        if (this.head.next !== null) {
            let prev = null;
            let temp = this.head;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return temp;
        }

    }

    shift() {
        // case 1: 0 node
        if (this.head == null) {
            return undefined;
        }

        // case 2: 1 node 
        if (this.head.next == null) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }

        // case 3: multiple nodes
        if (this.head.next !== null) {
            let temp = this.head;
            this.head = temp.next;
            temp.next = null;
            this.length--;
            return temp;
        }
    }

    unshift(value) {
        // case 1: 0 node
        if (this.head == null) {
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        // case 2: if head is present; if (this.head)
        else {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next
        }
        return temp;
    }

    get(index) {
        if (index == null || index == undefined) {
            throw new TypeError("Index must be a number")
        } else if (index > this.length) {
            throw new RangeError("Index out of bounds");
        } else {
            let temp = this.head
            let count = 0;
            while (temp.next && count !== index) {
                temp = temp.next;
                count++;
            }
            return temp;
        }
    }

    set(index, value) {
        if (index == null || index == undefined) {
            throw new TypeError('Index must be a number');
        } else if (index > this.length) {
            throw new RangeError('Index out of bounds');
        } else {
            let temp = this.get(index);
            if (temp) {
                temp.value = value
            } else {
                return false
            }
            return true
        }
    }

    insert(index, value) {
        if (typeof index !== "number") {
            throw new TypeError("index must be a number");
        }
        if (index < 0 || index > this.length) {
            throw new RangeError("index out of bounds");
        }

        const newNode = new Node(value);

        // insert at head
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }

        let temp = this.head;
        let prev = null;
        let counter = 0;

        while (counter < index) {
            prev = temp;
            temp = temp.next;
            counter++;
        }

        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return this;
    }

    size() {
        return this.length;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }


}

const myLinkedList = new LinkedList();

// push method
// console.log(myLinkedList);
// myLinkedList.push(1);
// console.log(myLinkedList);

// pop method
// myLinkedList.push(1);
// myLinkedList.push(2);
// myLinkedList.print();
// let poppedElement = myLinkedList.pop();
// myLinkedList.print(poppedElement);
// myLinkedList.print();
// poppedElement = myLinkedList.pop();
// myLinkedList.print(poppedElement);
// myLinkedList.print();
// poppedElement = myLinkedList.pop();
// myLinkedList.print(poppedElement);
// myLinkedList.print();

// shift method
// myLinkedList.push(1);
// myLinkedList.push(2);
// myLinkedList.print();
// let poppedElement = myLinkedList.shift();
// myLinkedList.print(poppedElement);
// myLinkedList.print();
// poppedElement = myLinkedList.shift();
// myLinkedList.print(poppedElement);
// myLinkedList.print();
// poppedElement = myLinkedList.shift();
// myLinkedList.print(poppedElement);
// myLinkedList.print();

// unshift method
// myLinkedList.push(1);
// myLinkedList.print();
// myLinkedList.unshift(2);
// myLinkedList.print();

// get first element 
// myLinkedList.getFirst()
// myLinkedList.push(0);
// myLinkedList.push(1);
// myLinkedList.push(2);
// let firstElement = myLinkedList.getFirst();
// myLinkedList.print(firstElement);

// get last element
// myLinkedList.push(0);
// myLinkedList.push(1);
// myLinkedList.push(2);
// let lastElement = myLinkedList.getLast();
// myLinkedList.print(lastElement);

// get or get by index
// myLinkedList.push(0);
// myLinkedList.push(1);
// myLinkedList.push(2);
// let lastElement = myLinkedList.get(1);
// myLinkedList.print(lastElement);

// set 
// myLinkedList.push(0);
// myLinkedList.push(1);
// myLinkedList.push(2);
// let lastElement = myLinkedList.set(0, 1111);
// myLinkedList.print(lastElement);
// myLinkedList.print();

// insert (insert node at any index ) 
myLinkedList.push(0);
myLinkedList.push(1);
myLinkedList.push(2);
let ll = myLinkedList.insert(0, 1111);
myLinkedList.print(ll);


// Assume n = length of the linked list

// Node constructor
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Initializes value and next pointer in constant time.

// LinkedList constructor
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Creates at most one node and sets head, tail, and length.

// print(node)
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Only prints an object reference.

// push(value)
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Uses tail pointer, no traversal required.

// pop()
// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation: Traverses the list to find the node before the tail.

// shift()
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Removes the head directly.

// unshift(value)
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Inserts a node at the head.

// getFirst()
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Direct access to head.

// getLast()
// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation: Traverses the list to reach the last node.

// get(index)
// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation: Traverses nodes up to the given index.

// set(index, value)
// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation: Calls get(index), which is linear time.

// insert(index, value)
// Time Complexity:
// Best case (index = 0): O(1)
// Worst case (index = n): O(n)
// Space Complexity: O(1)
// Explanation: Traverses list to the insertion position.

// size()
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Returns stored length.

// clear()
// Time Complexity: O(1)
// Space Complexity: O(1)
// Explanation: Clears references; garbage collector handles memory.