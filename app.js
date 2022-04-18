const LinkedList = require('../data_Structures/linked_lists/linkedList')

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
ll.insertAtIndex(2, 50);
ll.print();
console.log(ll.getByIndex(2).value);

// const ll = LinkedList.fromValues(10, 20);
// ll.print();
// ll.insertAtIndex(0, 30);
// ll.print();