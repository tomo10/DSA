// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     },
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    newNode.previous = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);

    // want to get to the node (leader) just before the index we are given
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++
    console.log(this)
    // return printList() just for demo
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check params (we havent coded this)
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.previous = leader;

    this.length--;
    return this.printList()
  }
}

const myLinkedList = new DoublyLinkedList(10)

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1,99);
myLinkedList.printList();
myLinkedList.remove(1); // should remove 10 from the list
console.log(myLinkedList);

// myLinkedList.prepend(91)
// myLinkedList.prepend(5)
// myLinkedList.prepend(1)
// myLinkedList.insert(44, 2)
// myLinkedList.insert(123, 7)
// myLinkedList.remove(2)
