class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        if (value !== null && value !== undefined) {
            let newNode = new Node(value);
            this.head = newNode;
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

    unshift(value) {
        //    case 1: head == null 
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }
}

function main() {
    const arr = [1, 2, 3, 4];
    let ll = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    ll.unshift(5);
}

main();