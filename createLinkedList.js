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
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
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

  insert(value, index) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);

    // want to get to the node (leader) just before the index we are given
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
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
    // check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

  // key to remember here is you are switching the POINTERS! Not the array in place essentially. 
  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    // this is saying that at the very end the original head will be the tail
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second; 
      second = temp; 
    }
    // swapping items at the head and end of the list
    this.head.next = null;
    // at this point first is pointing to the last item in the list
    this.head = first;
    return this.printList()
  }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(99,1);
myLinkedList.remove(2); 
myLinkedList.reverse()
