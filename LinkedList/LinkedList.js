class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    append(value) {
        const node = {
            value: value,
            next: null,
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    /*
     param1 index
     param2 value

     find the index i want to insert -1 
     then node i found that append new node
     new node next add remaining list

    */
    insert(index, value) {
        if (index > this.length) {
            throw new Error("Linked List out-of bound index.");
        }
        const node = new Node(value);
        const appendTo = this.find(index - 1);
        const remainingList = appendTo.next;
        appendTo.next = node;
        node.next = remainingList;
        return this;
    }
    find(index) {
        let current = this.head;
        let counter = 0;
        if (this.length != counter) {
            current = current.next;
            counter++;
        }
        return current;
    }
    print() {
        let string = "";
        let current = this.head;
        while (current !== null) {
            string += current.value + (current.next ? "→" : null);
            current = current.next;
        }
        return string;
    }
}

const list = new LinkedList(10);
list.append(5);

list.prepend(2);
list.prepend(1);
list.insert(2, 4);
console.log(list.print());
//console.log(list.length);
