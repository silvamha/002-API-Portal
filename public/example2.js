/**
 * Challenge: GET all the comments from the blog post with ID of 2 and log to the console
 *
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
 */

fetch(
  "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=floridablanca"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// fetch ("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=floridablanca")
// .then((res) => res.json())
// .then((data) =>{
//   Object.entries(data).forEach(([key, value]) => {
//     console.log(`Key: ${key}, Value: ${value}`);
//   });
// })

// fetch ("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=floridablanca")
// .then((res) => res.json())
// .then((data) =>{
//   function printKeysAndValues(obj, parentKey = '') {
//     Object.entries(obj).forEach(([key, value]) => {
//       let newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//         printKeysAndValues(value, newKey);
//       } else {
//         console.log(`Key: ${newKey}, Value: ${value}`);
//       }
//     });
//   }
//   printKeysAndValues(data);
// })

/**!SECTION Object Practice
 * 1. Manipulate Objects
 * 2. Manipulate Objects inside of objects
 * 3. Manipulate Objects with arrays inside
 */

// const myObj = { food: "chicken", junkFood: "burger", greasyFood: "pizza" };

// const { food, junkFood, greasyFood } = myObj;

// console.log(greasyFood);

const myObj2 = {
  name: "Joe",
  location: {
    country: "US",
    state: "GA",
    city: [
      {
        population: [
          { size: 100000, ethnicity: "mixed", education: "high school" },
        ],
        income: "low",
        industries: ["construction", "textile", "manufacturing"],
      },
    ],
  },
  Age: 42,
};

Object.values(myObj2).forEach((item) =>{

    console.log(item)
})

function sumPositiveIntegers(n) {
    // Base case: If n is 1, return 1.
    if (n === 1) {
      return 1;
    } 
    // Recursive case: Add n to the sum of integers from 1 to (n-1).
    else {
      return n + sumPositiveIntegers(n - 1);
    }
  }
  
  // Example: Calculate the sum of integers from 1 to 4
  const result = sumPositiveIntegers(4); // 1 + 2 + 3 + 4 = 10
  console.log(result); // Output: 10
  
  




  
