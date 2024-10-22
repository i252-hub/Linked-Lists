import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Size:", list.size()); 
console.log("Head:", list.head().value); 
console.log("Tail:", list.tail().value); 
console.log("At index 2:", list.at(2).value); 
console.log("Contains 20:", list.contains(20)); 
console.log("Find 10:", list.find(10)); 
console.log("List:", list.toString()); 