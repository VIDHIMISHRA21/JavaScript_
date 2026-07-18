// primitive data types
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phoneNumber; // undefined
// symbol
let uniqueId = Symbol("id"); // symbol

// reference data types(non primitive type )
let hobbies = ["reading", "swimming"]; // array
let person = { name: "John", age: 30 }; // object   
//function
function greet() {
  console.log("Hello!");
}

//objects are mutable, primitive data types are immutable
 
// ******************************STACK & HEAP MEMORY***********************

// stack(primitive datatypes) - stores data in a linear fashion, faster access, limited size

// heap(reference datatypes) - stores data in a non-linear fashion, slower access, larger size