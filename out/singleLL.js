"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Node {
    constructor(value, next = undefined) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(...values) {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
        this.push(...values);
    }
    *[Symbol.iterator]() {
        let node = this.head;
        if (!node)
            yield node;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }
    push(...values) {
        if (values.length === 1)
            return this._push(values[0]);
        for (let value of values) {
            this._push(value);
        }
        return this;
    }
    _push(value) {
        const newNode = new _Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail ? (this.tail.next = newNode) : undefined;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        let current = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = undefined;
        }
        else {
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            newTail.next = undefined;
            this.tail = newTail;
        }
        this.length--;
        return current;
    }
    shift() {
        if (!this.head)
            return undefined;
        let head = this.head;
        if (this.head === this.tail)
            this.head = this.tail = undefined;
        else
            this.head = head.next;
        this.length--;
        return head;
    }
    unShift(value) {
        const head = new _Node(value);
        if (!this.head)
            this.head = this.tail = head;
        else {
            head.next = this.head;
            this.head = head;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length)
            return undefined;
        if (this.length + index < 0)
            return undefined;
        let node = this.head;
        if (index >= 0)
            for (let i = 0; i !== index; i++)
                node = node ? node.next : node;
        else
            for (let i = 0; i !== this.length + index; i++)
                node = node ? node.next : node;
        return node;
    }
    set(index, value) {
        const node = this.get(index);
        if (!node)
            return undefined;
        else
            node.value = value;
        return node;
    }
    insert(index, value) {
        if (index === this.length - 1 || index === -1)
            return this.push(value);
        if (index === 0)
            return this.unShift(value);
        const node = this.get(index);
        if (!node)
            return node;
        const newNode = new _Node(value);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return this;
    }
    remove(index) {
        if (index === 0)
            return this.shift();
        if (index === this.length - 1 || index === -1)
            return this.pop();
        const prevNode = this.get(index - 1);
        if (!prevNode)
            return undefined;
        const node = prevNode.next;
        prevNode.next = node ? node.next : node;
        this.length--;
        return node;
    }
    reverse() {
        if (!this.head || !this.tail)
            return this;
        if (this.head === this.tail)
            return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = undefined;
        let pre = undefined;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        return this;
    }
    foreach(cb) {
        for (let _value of this) {
            if (!_value)
                break;
            cb(_value);
        }
    }
    map(cb) {
        const newLL = new LinkedList();
        let value;
        for (let _value of this) {
            if (!_value)
                break;
            value = cb(_value);
            newLL.push(value);
        }
        return newLL;
    }
    filter(cb) {
        const newLL = new LinkedList();
        for (let _value of this) {
            if (!_value)
                break;
            if (cb(_value)) {
                newLL.push(_value);
            }
        }
        return newLL;
    }
}
exports.default = LinkedList;
const list = new LinkedList(...[12, 13, 14, 15, 16, 17, 19, 20]);
console.log(...list.filter(value => value % 2 === 0));
//# sourceMappingURL=singleLL.js.map