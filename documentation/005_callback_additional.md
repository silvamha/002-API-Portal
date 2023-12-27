## 01 Additional callback instructions
```JS
silvamha: Please review my code and let me know what I am doing incorrectly and how to fix it```/**
 * Challenge: 
 * 
 * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 * 
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
    const resultingArray = []
    array.forEach((item) =>{
        if (callback(item) === true){
            resultingArray.push(item)
        }
        return resultingArray
    })
    // Write your filtering logic here
}

filterArray()

GitHub Copilot: Your `filterArray` function is almost correct, but there are a couple of issues:



silvamha: What are the issues? I am struggling with the concept of callback functions

GitHub Copilot: The issues with your current code are:

1. The `return resultingArray` statement is inside the `forEach` loop, which is incorrect. It should be outside the loop because you want to return the `resultingArray` after the loop has finished processing all items in the array.

2. You're calling `filterArray()` without any arguments. This will cause an error because your function expects two arguments: an array and a callback function.

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In your case, the callback function is used to determine whether an item should be included in the resulting array.

Here's how you can fix your code:

```javascript
function filterArray(array, callback) {
    const resultingArray = []
    array.forEach((item) => {
        if (callback(item) === true){
            resultingArray.push(item)
        }
    })
    return resultingArray  // Move this outside the loop
}

// Define a callback function
function hasPet(person) {
    return person.hasPet
}

// Call filterArray with the people array and the hasPet callback function
const peopleWithPets = filterArray(people, hasPet)
```

In this example, `hasPet` is a callback function that checks if a person has a pet. The `filterArray` function uses this callback to filter the `people` array and returns a new array that only includes people who have pets.
```
