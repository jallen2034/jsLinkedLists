// class to construct all of the nodes in our linkes list
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// class to create the linked list
class LinkedList {

  // constructor of class which keeps track of the head in linked list & its length
  constructor() {
    this.head = null; 
    this.length = 0; 
  }

  // insert an element into the start of a linked list, runs in constant time (big O (1))
  insertAtHead(data) {
    this.head = new LinkedListNode(data, this.head);
    this.length++;
  }

  /* get an element in the linked list by index
   * return the current node we find while traversing the linked list
   * this runs in constant time (big O (1)) */
  getNodeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // point our new node to the next node in the linked list
  pointNewNodeToNextNode(index, newNodeToInsert) {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNodeToInsert.next = current.next;
  }

  // point the previous node in the linked list to the new node we're inserting into 
  pointPrevNodeToNewNode(index, newNodeToInsert) {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = newNodeToInsert;
  }

  // insert a node in the linked list at a particular index
  insertAtIndex(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      this.insertAtHead(value);
    } else {
      const newNodeToInsert = new LinkedListNode(value, null);
      this.pointNewNodeToNextNode(index, newNodeToInsert);
      this.pointPrevNodeToNewNode(index, newNodeToInsert);
      this.length++;
    }
  }

  // print linked list and its nodes to console 
  print() {
    let output = '';
    let current = this.head;

    while (current) {
      output = `${output}${current.value} -> `
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

// helper function to add nodes to the linked list from an array
LinkedList.fromValues = function(...values) {
  const linkedList = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    linkedList.insertAtHead(values[i]);
  }
  return linkedList;
}

module.exports = LinkedList;