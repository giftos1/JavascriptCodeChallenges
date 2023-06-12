 // this function converts an object to array, where each element represents
 // a key-value pair in the form of an array

 function toArray(obj) {
    if (Object.keys(obj).length === 0) {
        return [];
    }
     return Object.entries(obj);

 }

 console.log(toArray({ a: 1, b: 2 }))
 console.log(toArray({}))