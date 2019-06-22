interface _Node<T> {
  value: T;
  next?: _Node<T>;
  prev?: _Node<T>;
}
export class DoublyLL<T> {
  head?: _Node<T> = undefined;
  tail?: _Node<T> = undefined;
  length: number = 0;

  constructor() {}
  private node(value: T): _Node<T> {
    return {
      value,
    };
  }
  push(value: T) {
    const newNode = this.node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
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
    } else {
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

const d = new DoublyLL<number>();
d.push(1);
d.push(2);
