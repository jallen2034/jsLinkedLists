const LinkedList = require('./linkedList');

describe('#insertAtHead', () => {
  test('Test that insertAtHead method adds the element to the beginning of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHeadVal = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHeadVal);
    expect(ll.length).toBe(2);
  });
});

describe('#getNodeByIndex', () => {
  describe('with an index of less than 0', () => {
    test('it returns null', () => {
      const linkedList = LinkedList.fromValues(10, 20);
      expect(linkedList.getNodeByIndex(-1)).toBeNull();
    });
  });

  describe('with an index greater than list length', () => {
    test('it returns null', () => {
      const linkedList = LinkedList.fromValues(10, 20);
      expect(linkedList.getNodeByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const linkedList = LinkedList.fromValues(10, 20);
      expect(linkedList.getNodeByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const linkedList = LinkedList.fromValues(10, 20, 30, 40);
      expect(linkedList.getNodeByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with an index of less than 0', () => {
    test('it does not insert anything ', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with an index greater than the list length', () => {
    test('it does not insert anything ', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with an index less than 0', () => {
    test('it should insert at the head ', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with an index in the middle', () => {
    test('it should insert at the given index ', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getNodeByIndex(2)

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});