//array is a collection of similar data types     
//javascript array are resizeable 
// and can hold different data types


//javascript array are zero indexed, meaning 
// the first element of the array is at index 0, the second element is at index 1, and so on.


//shallow copy of an array is a new array that contains references to the same elements as the original array.

const myArray =[1,2,3,4];
console.log(myArray[3]);
const newArr=["radhakrishn","ramsita"];
//Array methods

myArray.push(5);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray); // shifts the first element of the array and returns that removed element. This method changes the length of the array.

myArray.unshift(0);
console.log(myArray); // adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(myArray.length);
console.log(myArray.includes(21));
console.log(myArray.indexOf(8));

const newArr=myArray.join();
console.log(newArr);
console.log(myArray);
