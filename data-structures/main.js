console.log('Running Main.js');

/*
/////////////////////// LISTS //////////////////////////
let list = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list.get(0)); //1
console.log(list.get(1)); //2
console.log(list.get(2));
console.log(list.get(3));

console.log('/////////////////');

console.log(list.pop()); //4
console.log(list.pop()); //3
console.log(list.pop()); //2
console.log(list.length); // 1

console.log('/////////////////');

// 1,2,3,4
list.push(2);
list.push(3);
list.push(4);

list.unshift(0); //[0,1,2,3]
console.log(list.memory);

list.unshift(10); //[10,0,1,2]
console.log(list.memory);

console.log('/////////////////');
//[10,0,1,2]

list.shift(); //[0,1,2]
list.shift(); //[0,1]
console.log(list.memory);
*/

/*
/////////////////////// Hash Table //////////////////////////

let hashtable = new HashTable();

hashtable.set('a', { value: 'a' });
hashtable.set('z', { value: 'z' });
hashtable.set('aa', { value: 'aa' });

console.log(hashtable.get('a')); // {value: a})
console.log(hashtable.get('z')); // {value: z}
console.log(hashtable.memory);

hashtable.remove('a');
console.log(hashtable.has('a')); //false
console.log(hashtable.has('aa')); //true
console.log(hashtable.has('-1-1-1')); //false
*/


/////////////////////// Stack //////////////////////////

/*

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.peek()); //4

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.list); //[]
console.log(stack.length); //0

*/

/////////////////////// Queue //////////////////////////

/* 
let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.list); // [1,2,3,4]

console.log(queue.peek()); //1

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.length); //1
console.log(queue.peek()); //4
console.log(queue.list);
*/

/////////////////////// Graphs //////////////////////////
/*

let network = new Graph();

network.addNode('mum');
network.addNode('dad');

network.addNode('Male: majid');
network.addNode('Male: C');

network.addNode('Female: A');
network.addNode('Female: S');

network.addLine('mum', 'Male: majid'); network.addLine('dad', 'Male: majid');
network.addLine('mum', 'Male: C'); network.addLine('dad', 'Male: C');

console.log(network.toString());

*/

/////////////////////// Linked List //////////////////////////

// let linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);

// console.log(linkedList);

// console.log(linkedList.get(1)); //1
// console.log(linkedList.get(2)); //2
// console.log(linkedList.get(3)); //3
// console.log(linkedList.get(4)); // error

// linkedList.addAtPosition(-1,1); //-1 => 1 => 2 => 3
// console.log(linkedList.toString());

// linkedList.addAtPosition(100,3); //-1 => 1 => 100 => 2 => 3
// console.log(linkedList.toString());

// linkedList.remove(1);
// console.log(linkedList.toString()); // 1 => 100 => 2 =>=> 3

// linkedList.remove(2); // 1 => 2 => 3
// console.log(linkedList.toString());

// linkedList.remove(1); // 2 => 3
// console.log(linkedList.toString());

// linkedList.remove(2); //2
// console.log(linkedList.toString());

// linkedList.remove(1); //2
// console.log(linkedList.toString());

/////////////////////// Trees //////////////////////////

// let tree = new Tree();

// tree.root = {
//     value: 'A',
//     children: [
//         { value: 'B', children: [{ value: 'B.0', children: [] }] },
//         { value: 'C', children: [{ value: 'C.0', children: [] }] },
//         {
//             value: 'D',
//             children: [
//                 {
//                     value: 'D.0',
//                     children: [
//                         { value: 'D.0.0', children: [] }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

/**
 * Traverse function is depth first so
 * A -> 
 *      B -> B.0
 *      C -> C.0
 *      D -> D.0 -> D.0.0
 */

// tree.traverse(tree.print);

// tree.add('D.0.0.0','D.0.0');
// tree.add('E', 'A');
// tree.add('E.0', 'E');
// tree.add('E.0.0', 'E.0');
// console.log('-----------------');
// tree.traverse(tree.print);

/////////////////////// Binary Search Tree //////////////////////////
//let bTree = new BinarySearchTree();

// 10 
//  - 5
//      - 2
//      - 6
//  - 15
//      - 11
//      - 16

/*
bTree.root = new BNode(10, 
    new BNode(5, 
        new BNode(2), new BNode(6)),
    new BNode(15, 
        new BNode(11), new BNode(16)));

console.log(bTree.root);

console.log(bTree.contains(16));
console.log(bTree.contains(5));
console.log(bTree.contains(6));
console.log(bTree.contains(10));
console.log(bTree.contains(11));

console.log(bTree.contains(0));
console.log(bTree.contains(1));
console.log(bTree.contains(-1));
*/




