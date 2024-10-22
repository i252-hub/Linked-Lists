import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log("Size:", list.size()); 
console.log("Head:", list.head().value); 
console.log("Tail:", list.tail().value); 
console.log("At index 2:", list.at(2).value); 
console.log("Contains 20:", list.contains(20)); 
console.log("Find 10:", list.find(10)); 
console.log("Pop:", list.pop().value); 
console.log("List:", list.toString()); 