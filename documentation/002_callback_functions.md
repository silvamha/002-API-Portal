## 01 Callback Functions Instructions
```JS
// /**Portal Application */

// // Function to fetch info from The Guardian
// function getIdea() {
//   fetch(
//     "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=e3adcb87-3cbc-4966-bcc2-0437afdc00e3"
//   )
//     // Displays data fetched from The Guardian
//     .then((res) => res.json())
//     .then((data) => {
//       // Iterate object to get to arrays
//       const results = data.response.results;
//       results.forEach((item) => {
//         const { id, type, sectionName, webTitle, webUrl } = item;

//         console.log(item)
//         const testUrl = document.querySelector("#test-url");

//         let renderInfo = "";
//         renderInfo += `
//         <div class="content">
//         <h1 class="h1 title is-5">${webTitle}</h1>
//         <div class ="container">
//         <a href="${webUrl}">User friendly name of url goes here</a>
//         </div>

//       </div>
//         `;
//         console.log(type, sectionName, webTitle, webUrl);
//         document.querySelectorAll('.section').forEach((element)=>{
//           element.innerHTML+= renderInfo
//         })
//       });

//       console.log(data);
//     });

//     fetch("http://api.mediastack.com/v1/news?access_key=cc7bf8d8bbbdedaefacbd18e9c3e4f5b&languages=en")

//         .then(res => res.json())
//         .then(data => {

//             console.log(data)
//         })
// }

// getIdea();

function accessDeckOfCard() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); /** Shows the object */
      Object.entries(data).forEach((data) => {
        /**Shows the keys in the object */
        console.log(data);
      });
    });
}
accessDeckOfCard();

/**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our `addEventListener`
 */

fetchAPI = () => {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

document.getElementById("new-deck").addEventListener("click", fetchAPI);

/**
 anything.
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
];

// function filterArray(array, callback) {
//   const resultingArray = [];
//   array.forEach((item) => {
//     if (callback(item)) {
//       resultingArray.push(item);
//     }
//   });
//   return resultingArray;
// }

// // We'll do this later
// // const peopleWithPets = filterArray(people, /*???*/)

// const peopleWithPets = filterArray(people, person => person.hasPet);
// console.log(peopleWithPets);

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbersOnly(array, callback) {
  const newArrayOfNumbers = [];
  array.forEach((element) => {
    if (callback(element)) {
      newArrayOfNumbers.push(element);
    }   
  });
   return newArrayOfNumbers
}

const arrayOfEvenNumbers = evenNumbersOnly(arrayOfNumbers, evenNumbers => evenNumbers % 2 ===0)

console.log(arrayOfEvenNumbers)
```
silvamha: @workspace /explain I tried very hard to complete this challenge but I can't mostly because I don't understand what is being asked.

GitHub Copilot: Sure, let's break down the challenge:

The challenge is asking you to create a function named `filterArray` that takes two parameters: an array and a callback function. This function should filter the array based on the condition specified in the callback function.



silvamha: This is as far as I can manage to go... I can't seem to be able to get passed this part of the problem and do anything with callback``` * This function should take 2 parameters:
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
];

function filterArray(array, callback) {
  const resultingArray = [];
  // Write your filtering logic here
people.forEach((item) =>{
return item.hasPet
})
}

GitHub Copilot: You're on the right track! The key is to use the callback function inside the loop. The callback function will be used to determine whether to include each item in the resulting array. Here's how you can do it:

```javascript
function filterArray(array, callback) {
  const resultingArray = [];
  array.forEach((item) => {
    if (callback(item)) {
      resultingArray.push(item);
    }
  });
  return resultingArray;
}
```

In this code, we're looping over each item in the input array. For each item, we call the callback function with the item as an argument. If the callback function returns `true`, we add the item to the `resultingArray`. At the end of the function, we return the `resultingArray`.

You can use this function with a callback to filter the `people` array like this:

```javascript
const peopleWithPets = filterArray(people, person => person.hasPet);
console.log(peopleWithPets);
```

This will log an array of people who have pets.

silvamha: Please give me an explanation of what we just did, explain callback functions, their uses and give me one exercise to see if I can do it on my own and then you check my code, please.

GitHub Copilot: Sure, let's break it down:

A callback function is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

In your code, `filterArray` is a function that takes an array and a callback function as arguments. It creates a new array, `resultingArray`, and then iterates over each item in the input array. For each item, it calls the callback function, passing the item as an argument. If the callback function returns `true`, the item is added to `resultingArray`. If the callback function returns `false`, the item is not added. When it has finished iterating over the array, `filterArray` returns `resultingArray`.

The line `const peopleWithPets = filterArray(people, person => person.hasPet);` is using `filterArray` to create a new array that only includes people who have pets. The callback function here is `person => person.hasPet`, which is a function that takes a person object and returns `true` if the person has a pet and `false` otherwise.

Here's an exercise for you:

You have an array of numbers: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. Write a function that uses `filterArray` to create a new array that only includes the even numbers. The callback function you pass to `filterArray` should take a number and return `true` if the number is even and `false` otherwise.

silvamha: Please review my code for accuracy and comment on it...

GitHub Copilot: Your code is correct and well-written. Here's a breakdown:

1. You've defined an array `arrayOfNumbers` with numbers from 1 to 10.

2. You've created a function `evenNumbersOnly` that takes an array and a callback function as parameters. This function creates a new array `newArrayOfNumbers`, and then iterates over each element in the input array. For each element, it calls the callback function, passing the element as an argument. If the callback function returns `true`, the element is added to `newArrayOfNumbers`. If the callback function returns `false`, the element is not added. When it has finished iterating over the array, `evenNumbersOnly` returns `newArrayOfNumbers`.

3. You've used `evenNumbersOnly` to create a new array `arrayOfEvenNumbers` that only includes the even numbers from `arrayOfNumbers`. The callback function here is `evenNumbers => evenNumbers % 2 === 0`, which is a function that takes a number and returns `true` if the number is even and `false` otherwise.

4. Finally, you've logged `arrayOfEvenNumbers` to the console.

This is a great implementation of a filter function using callbacks. Well done!

silvamha: Wow! I did it correctly?

GitHub Copilot: Yes, you did! Your code correctly filters out the even numbers from the original array. The callback function you provided to `evenNumbersOnly` correctly identifies whether a number is even. Well done!

silvamha: please give me another callback exercise

GitHub Copilot: Sure, here's another exercise for you:

You have an array of strings: `['apple', 'banana', 'cherry', 'date', 'elderberry']`. Write a function that uses the `filterArray` function to create a new array that only includes the fruits with more than 5 letters. The callback function you pass to `filterArray` should take a string and return `true` if the string has more than 5 letters and `false` otherwise.

Here's the `filterArray` function for reference:

```javascript
function filterArray(array, callback) {
  const resultingArray = [];
  array.forEach((item) => {
    if (callback(item)) {
      resultingArray.push(item);
    }
  });
  return resultingArray;
}
```

Try to write the code for this exercise and let me know if you need any help.

silvamha: But you already gave me the answer. Give me an exercise so that I can do it and then you can review my code

GitHub Copilot: Apologies for the confusion. Here's a new exercise:

You have an array of objects representing people with their ages: 

```javascript
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "Dave", age: 35 },
  { name: "Eve", age: 40 },
];
```

Write a function that uses the `filterArray` function to create a new array that only includes the people who are 30 years old or older. The callback function you pass to `filterArray` should take a person object and return `true` if the person's age is 30 or more, and `false` otherwise.

Here's the `filterArray` function for reference:

```javascript
function filterArray(array, callback) {
  const resultingArray = [];
  array.forEach((item) => {
    if (callback(item)) {
      resultingArray.push(item);
    }
  });
  return resultingArray;
}
```

Try to write the code for this exercise and let me know if you need any help.