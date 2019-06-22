"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLL {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
    node(value) {
        return {
            value,
        };
    }
    push(value) {
        const newNode = this.node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }
    pop() {
        if (!this.head) {
            console.log('o');
            return undefined;
        }
        else {
            let tempNode = this.head;
            while (tempNode.next) {
                tempNode = tempNode.next;
            }
            this.tail = tempNode;
            this.tail && (this.tail.next = undefined);
            this.length--;
            if (this.length === 1) {
                this.head = undefined;
            }
            return tempNode.value;
        }
    }
}
exports.DoublyLL = DoublyLL;
const d = new DoublyLL();
d.push(1);
d.push(2);
//# sourceMappingURL=doublyLL.js.map