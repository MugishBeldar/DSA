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
            this.tail = newNode;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
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
}

function main() {
    const arr = [1, 2, 3, 4];
    let ll = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    let ans = ll.pop();
    console.log(ans);
    console.log(JSON.stringify(ll))
}

main()