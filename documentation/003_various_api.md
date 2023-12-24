## 01 Below is the attempt of calling several apis, most of which were successful.

```JS
// async function logMovies() {
//   const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/");
//   const movies = await response.json();
//   console.log(movies);
// }

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     const newData = data.slice(0, 3);
//     console.log(newData);
//     newData.forEach((item) => {
//       console.log(item);
//     });
//   });


/**
 * Challenge: method chaining!
 * 
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 * 
 * 2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

// const voters = [
//   {name: "Joe", email: "joe@joe.com", voted: true},
//   {name: "Jane", email: "jane@jane.com", voted: true},
//   {name: "Bo", email: "bo@bo.com", voted: false},
//   {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// Write your code below
// function extractEmail(){
//   let resultFiltered = voters.filter((hasVoted) =>{
// return hasVoted.voted === true
// }).map((hasVoted) =>{
//   return hasVoted.email
//   })
//   console.log(resultFiltered)
// }
//   document.querySelector('#test-btn').addEventListener('click',extractEmail)


  // Movie Database API

 // Movie Database API

// const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
//         'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//   try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       const parsedResult = JSON.parse(result);
//       let movieTitles = [];
//       for (let movie of parsedResult.Search) {
//           movieTitles.push(movie.Title);
//       }
//       console.log(movieTitles); // logs the array of movie titles
//   } catch (error) {
//       console.error(error);
//   }
// }

// fetchData();

// const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
// 		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
//   try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       const parsedResult = JSON.parse(result);
//       console.log(parsedResult); // logs the parsed result
//       let quoteNames = [];
//       for (let quote of parsedResult.quotes) {
//           quoteNames.push(quote.name);
//       }
//   } catch (error) {
//       console.error(error);
//   }
// }

// fetchData();



// const url = 'https://opengraph-io.p.rapidapi.com/api/1.1/sites?url=https%3A%2F%2Freddit.com&accept_lang=en-US%2Cen%3Bq%3D0.9&full_render=false&cache_ok=false&max_cache_age=432000000';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
// 		'X-RapidAPI-Host': 'opengraph-io.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
//   const parsedResult = JSON.parse(result);
//       console.log(parsedResult); // logs the parsed result

// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// fetchData();


const url = 'https://bionic-reading1.p.rapidapi.com/convert';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
		'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		response_type: 'html',
		request_type: 'html',
		fixation: '1',
		saccade: '10'    
	})  
};

// console.log(options)




const findMethod = (findMethod)=>{
  for(let option in options){
    console.log(option)
  }
}

findMethod()

const findObjects = Object.keys(options)

console.log(findObjects)

for (let key in options) {
  let variable = options[key];
  if (key === 'body') {
    variable = [...variable.entries()].map(([k, v]) => `${k}: ${v}`).join(', ');
  }
  console.log(`${key}: ${variable}`);
  document.querySelector('#para-test').textContent += `${key}: ${variable}\n`;
}

async function fetchData() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();
```

## 02 Below are the comments, suggestions, and code snipets of Copilot
```JS
silvamha: @workspace /explain Write an explanation for the active selection as paragraphs of text.

```javascript
 // Movie Database API

  const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
```



GitHub Copilot: The selected code is a simple JavaScript script that fetches data from a movie database API. 



silvamha: When I run the API, I get this error message. ```Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at index.js:62:19)```How can we resolve this?

GitHub Copilot: The error message you're seeing is because the `await` keyword is only valid inside `async` functions. You're trying to use `await` outside of an `async` function, which is causing the error.

To fix this, you can wrap your code inside an `async` function. Here's how you can do it:

```javascript
// Movie Database API

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
```

In this code, I've created a new `async` function called `fetchData` and moved your code inside it. Then, I've called `fetchData` to execute it.

silvamha: Wow! Many thanks!!!!!

GitHub Copilot: You're welcome! If you have any more questions or need further help, feel free to ask. Happy coding!

silvamha: Now, I do get a result, but I cannot iterate over the objects ```{"Search":[{"Title":"Avengers: Endgame","Year":"2019","imdbID":"tt4154796","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},{"Title":"Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere","Year":"2019","imdbID":"tt10240638","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg"},{"Title":"Avengers: Endgame and the Latest Captain Marvel Outrage!!","Year":"2019","imdbID":"tt10025738","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg"},{"Title":"Avengers Endgame: the Butt Plan","Year":"2019","imdbID":"tt10399328","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg"},{"Title":"Avengers: Endgame (2019)","Year":"2019","imdbID":"tt16416424","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BY2I4YzU4YTYtZDc3OC00NjcwLTlhM2ItNjlmYjNiMjFkMTRiXkEyXkFqcGdeQXVyMTE4NTEwNTky._V1_SX300.jpg"},{"Title":"Avengers: Endgame (2019) - Spoiler Full Review","Year":"2019","imdbID":"tt17978032","Type":"movie","Poster":"N/A"}],"totalResults":"6","Response":"True"}``` How do we get passed that?

GitHub Copilot: The result you're getting is a JSON string. To iterate over the objects, you first need to parse this string into a JavaScript object using `JSON.parse()`. Then, you can access the `Search` array and iterate over it. Here's how you can do it:

```javascript
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
        for (let movie of parsedResult.Search) {
            console.log(movie.Title); // or any other property you're interested in
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();
```

In this code, `JSON.parse(result)` converts the JSON string into a JavaScript object. `parsedResult.Search` accesses the `Search` array in this object. The `for...of` loop then iterates over this array, and `console.log(movie.Title)` logs the title of each movie.

silvamha: Now, it returns this... ''Avengers: Endgame
index.js:69 Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere
index.js:69 Avengers: Endgame and the Latest Captain Marvel Outrage!!
index.js:69 Avengers Endgame: the Butt Plan
index.js:69 Avengers: Endgame (2019)
index.js:69 Avengers: Endgame (2019) - Spoiler Full Review``` I still cannot manipulate the data it seems...

GitHub Copilot: The data you're seeing is the output of the `console.log(movie.Title)` statement, which logs the title of each movie. If you want to manipulate the data, you can do so inside the `for...of` loop. 

For example, if you want to create an array of movie titles, you can do it like this:

```javascript
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
        let movieTitles = [];
        for (let movie of parsedResult.Search) {
            movieTitles.push(movie.Title);
        }
        console.log(movieTitles); // logs the array of movie titles
    } catch (error) {
        console.error(error);
    }
}

fetchData();
```

In this code, `let movieTitles = [];` creates an empty array. `movieTitles.push(movie.Title);` adds the title of each movie to this array. `console.log(movieTitles);` then logs the array of movie titles.

silvamha: Awesome!!!! We are in!!!!

GitHub Copilot: Great to hear that! If you have any more questions or need further assistance, don't hesitate to ask. Enjoy your coding!

silvamha: Please help me fix this code and explain to me the logic behind it. I tried to copy parts of the previsous instructions you gave me but I am having througble understanding how to craft my variables and functions in order to generate an array so I can iterate over it and render to HTML ```const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
	}
};

async function fetchData() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
  const parsedResult = JSON.parse(result);
//       let movieTitles = [];
//       for (let movie of parsedResult.Search) {
//           movieTitles.push(movie.Title);
//       }
//       console.log(movieTitles); // logs the array of movie titles
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();

GitHub Copilot: The code you've posted is very similar to the previous one, but it fetches data from a different API - the Yahoo Finance API. The logic behind the code is the same: it sends a GET request to the API and then logs the response.

To generate an array from the response and iterate over it, you first need to know the structure of the response. If the response is similar to the one from the movie database API, you can use similar code to generate the array. However, if the structure is different, you'll need to adjust the code accordingly.

Assuming the response contains an array of quotes, you can generate an array of quote names like this:

```javascript
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
        let quoteNames = [];
        for (let quote of parsedResult.quotes) {
            quoteNames.push(quote.name);
        }
        console.log(quoteNames); // logs the array of quote names
    } catch (error) {
        console.error(error);
    }
}

fetchData();
```

In this code, `let quoteNames = [];` creates an empty array. `quoteNames.push(quote.name);` adds the name of each quote to this array. `console.log(quoteNames);` then logs the array of quote names.

To render the array to HTML, you can use the `document.createElement` and `document.body.appendChild` methods to create and append HTML elements for each quote name. However, this is beyond the scope of the current code and would require additional code.

silvamha: This is the message I am getting logged in the console```(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
0
: 
undefined
1
: 
undefined
2
: 
undefined
3
: 
undefined
4
: 
undefined
5
: 
undefined
6
: 
undefined
length
: 
7
[[Prototype]]
: 
Array(0)

GitHub Copilot: The `undefined` values in your array suggest that the property `name` does not exist in the objects you are iterating over in `parsedResult.quotes`. 

To fix this, you need to understand the structure of the response you're getting from the Yahoo Finance API. You can do this by logging the `parsedResult` to the console and inspecting it.

Replace `console.log(quoteNames);` with `console.log(parsedResult);` and check the structure of the logged object. Once you understand the structure, you can adjust the code to access the correct properties.

Here's the updated code:

```javascript
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
        console.log(parsedResult); // logs the parsed result
        let quoteNames = [];
        for (let quote of parsedResult.quotes) {
            quoteNames.push(quote.name);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();
```

After running this code, inspect the logged object and adjust the properties you're accessing in the `for...of` loop accordingly.

silvamha: How do you know how to name the variables in these codes?

GitHub Copilot: Variable names in code are often chosen to be descriptive of the data they hold, which makes the code easier to understand. Here's how the variables in your code might have been named:

- `url`: This variable holds the URL of the API endpoint you're fetching data from. It's named `url` because URLs are the addresses of web pages and API endpoints.

- `options`: This variable holds an object with options for the fetch request. It's named `options` because it specifies options like the HTTP method and headers.

- `response`: This variable holds the response from the fetch request. It's named `response` because it contains the server's response to the request.

- `result`: This variable holds the text of the response. It's named `result` because it contains the result of converting the response to text.

- `parsedResult`: This variable holds the result of parsing the text of the response as JSON. It's named `parsedResult` because it contains the result of the parsing operation.

- `quoteNames`: This variable holds an array of quote names. It's named `quoteNames` because it's intended to contain the names of quotes.

- `quote`: This variable holds each individual quote object as you iterate over `parsedResult.quotes`. It's named `quote` because it represents a single quote.

Remember, variable names are arbitrary and can be anything you like, but choosing descriptive names makes your code easier to read and understand.

silvamha: But how do you know there are quotes?

GitHub Copilot: The variable name `quotes` was used as an example based on the assumption that the Yahoo Finance API might return a list of quotes. However, the actual structure of the data returned by the API can vary.

To determine the actual structure, you should inspect the data returned by the API. You can do this by logging the parsed result to the console, as you did with `console.log(parsedResult);`.

Once you have the structure of the data, you can adjust your code to access the correct properties. For example, if the data contains a list of companies instead of quotes, you might need to change `parsedResult.quotes` to `parsedResult.companies` and adjust the rest of the code accordingly.

Remember, the names of variables and properties depend on the data you're working with. It's important to understand the structure of your data to be able to work with it effectively.

silvamha: I am trying to log parseResult as you suggested but am getting this error```index.js:119 
        
        
       GET https://opengraph-io.p.rapidapi.com/api/1.1/sites?url=https%3A%2F%2Freddit.com&accept_lang=en-US%2Cen%3Bq%3D0.9&full_render=false&cache_ok=false&max_cache_age=432000000 400 (Bad Request)
fetchData @ index.js:119
(anonymous) @ index.js:130
index.js:122 {error: {…}}error: code: -2005message: "Got 403 error from server."targetCode: 403[[Prototype]]: Object[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
index.js:124 {"error":{"code":-2005,"message":"Got 403 error from server.","targetCode":403}}

GitHub Copilot: The error message "Got 403 error from server" indicates that the server understood the request, but it refuses to authorize it. This status is similar to 401 (Unauthorized), but indicates that the client must authenticate itself to get the requested response.

This could be due to several reasons:

1. The API key is incorrect: Make sure that the API key you are using is correct. API keys are usually sensitive to spaces, case and misspellings.

2. The API key does not have the necessary permissions: The API key you are using might not have the necessary permissions to access the resource. You might need to check with the provider of the API key.

3. The resource does not exist: The resource you are trying to access might not exist. Check the URL you are using to make sure it is correct.

4. The server might be blocking your requests: Some servers block requests from certain user agents or IP addresses. This could be the case if you are sending too many requests in a short period of time.

To fix this issue, you should first check the API key and the URL. If they are correct, you might need to contact the provider of the API key or the server administrator for more information.

silvamha: I am looking at my API console and this is the message I get there```{
  "error": {
    "code": -2005,
    "message": "Got 403 error from server.",
    "targetCode": 403
  }
}

GitHub Copilot: The error message you're seeing indicates that the server is returning a 403 error in response to your request. A 403 error is an HTTP status code that means "forbidden." It's returned when the server understands your request, but refuses to fulfill it.

This could be due to several reasons:

1. The API key is incorrect: Make sure that the API key you are using is correct. API keys are usually sensitive to spaces, case and misspellings.

2. The API key does not have the necessary permissions: The API key you are using might not have the necessary permissions to access the resource. You might need to check with the provider of the API key.

3. The resource does not exist: The resource you are trying to access might not exist. Check the URL you are using to make sure it is correct.

4. The server might be blocking your requests: Some servers block requests from certain user agents or IP addresses. This could be the case if you are sending too many requests in a short period of time.

To fix this issue, you should first check the API key and the URL. If they are correct, you might need to contact the provider of the API key or the server administrator for more information.

silvamha: Please help me iterate through this object tree ```const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f',
		'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		response_type: 'html',
		request_type: 'html',
		fixation: '1',
		saccade: '10'    
	})  
};


GitHub Copilot: To iterate through the `options` object, you can use a combination of `for...in` loops. Here's how you can do it:

```javascript
for (let key in options) {
    if (typeof options[key] === 'object' && options[key] !== null) {
        for (let subKey in options[key]) {
            console.log(`options[${key}][${subKey}] = ${options[key][subKey]}`);
        }
    } else {
        console.log(`options[${key}] = ${options[key]}`);
    }
}
```

This code will log each key-value pair in the `options` object. If the value is an object (like `headers` and `body`), it will iterate over that object and log its key-value pairs.

Note: This code assumes that the `options` object is only nested one level deep. If the object can have more levels of nesting, you would need to use a recursive function to iterate through it.

silvamha: That was awesome, but I think it was a little overkill, I am just trying to iterate over the object so that I can use each key as a variable that I will later render in the HTML document, please help me out. I started with```const findMethod = (findMethod)=>{
  for(let option in options){
    console.log(option)
  }
}

findMethod()````const findObjects = Object.keys(options)

console.log(findObjects)`` But that is not taking me very far and I believe it is mostly incorrect,

GitHub Copilot: If you want to use each key in the `options` object as a variable, you can do so by iterating over the keys and assigning their corresponding values to variables. Here's how you can do it:

```javascript
for (let key in options) {
    let variable = options[key];
    console.log(`${key}: ${variable}`);
}
```

This code will create a new variable for each key in the `options` object and assign the corresponding value to it. Then it logs the key and the value.

However, please note that this will create variables only within the scope of the loop. If you want to use these variables elsewhere in your code, you might need to add them to an object or array, or declare them in a higher scope.

Also, if the values in the `options` object are objects themselves (like `headers` and `body`), you might need to handle them separately, depending on how you want to use them in your HTML document.

silvamha: Your code works partially, but the value of "body" is a string and your code is returning jebrish both in the console and when I try to render it to the HTML document. ```for (let key in options) {
  let variable = options[key];
  console.log(`${key}: ${variable}`);
  document.querySelector('#para-test').textContent=`${key}: ${variable}`
}

GitHub Copilot: The issue you're encountering is because the `body` property of the `options` object is a `URLSearchParams` object, which doesn't convert to a string in a meaningful way by default. 

If you want to display the contents of the `body` in a readable format, you'll need to handle it separately. Here's how you can modify your code to do this:

```javascript
for (let key in options) {
  let variable = options[key];
  if (key === 'body') {
    variable = [...variable.entries()].map(([k, v]) => `${k}: ${v}`).join(', ');
  }
  console.log(`${key}: ${variable}`);
  document.querySelector('#para-test').textContent += `${key}: ${variable}\n`;
}
```

This code checks if the current key is 'body'. If it is, it converts the `URLSearchParams` object to an array of key-value pairs, maps each pair to a string in the format 'key: value', and then joins these strings with commas. This results in a string that represents the contents of the `body` in a readable format.

Also, note the use of `+=` in the `textContent` line. This is to append the new text to the existing text, instead of replacing it. The `\n` at the end adds a new line after each key-value pair for better readability.
```
```
```

## 03 Additional code and suggestions from Copilot
```JS
silvamha: @workspace /explain Please review the challenge and my code and let me know if I did it correctly, please

GitHub Copilot: Your code correctly implements the second part of the challenge. You've used the `filter` method to select only the voters who have voted (where `voted` is `true`). Then, you've used the `map` method to transform the filtered array into an array of strings, where each string is a combination of the voter's name and email.

However, the resulting array contains both the name and email of the voters. The challenge asks for an array of email addresses only. You can achieve this by returning only `hasVoted.email` in your `map` function:

```javascript
let resultFiltered = voters.filter((hasVoted) => {
  return hasVoted.voted === true
}).map((hasVoted) => {
  return hasVoted.email
})

console.log(resultFiltered)
```

The first part of the challenge is commented out in your code. To complete it, you need to uncomment the code and ensure there's a button with the id "new-deck" in your HTML:

```javascript
document.getElementById("new-deck").addEventListener("click", function() {
    console.log("Clicked!")
})
```

This code adds an event listener to the button with the id "new-deck". When the button is clicked, "Clicked!" is logged to the console.

silvamha: Please review the challenge and my code and let me know if I accomplished it correctly```/**
 * Challenge: method chaining!
 * 
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 * 
 * 2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
  {name: "Joe", email: "joe@joe.com", voted: true},
  {name: "Jane", email: "jane@jane.com", voted: true},
  {name: "Bo", email: "bo@bo.com", voted: false},
  {name: "Bane", email: "bane@bane.com", voted: false}
]

// Write your code below
function extractEmail(){
  let resultFiltered = voters.filter((hasVoted) =>{
return hasVoted.voted === true
}).map((hasVoted) =>{
  return hasVoted.email
  })
  console.log(resultFiltered)
}
  document.querySelector('#test-btn').addEventListener('click',extractEmail)

GitHub Copilot: Your code correctly implements the second part of the challenge. You've used the `filter` method to select only the voters who have voted (where `voted` is `true`). Then, you've used the `map` method to transform the filtered array into an array of strings, where each string is the email of the voter who has voted.

However, the first part of the challenge is commented out in your code. To complete it, you need to uncomment the code and ensure there's a button with the id "new-deck" in your HTML:

```javascript
document.getElementById("new-deck").addEventListener("click", function() {
    console.log("Clicked!")
})
```

This code adds an event listener to the button with the id "new-deck". When the button is clicked, "Clicked!" is logged to the console. 

Please note that the button id should match the one in the challenge description unless the challenge allows for a different id. In your case, you've used 'test-btn' instead of 'new-deck'.

silvamha: Please ignore the commented out code and review only the voters email address challenge

GitHub Copilot: Your code correctly implements the second part of the challenge. You've used the `filter` method to select only the voters who have voted (where `voted` is `true`). Then, you've used the `map` method to transform the filtered array into an array of strings, where each string is the email of the voter who has voted.

Here's your code:

```javascript
const voters = [
  {name: "Joe", email: "joe@joe.com", voted: true},
  {name: "Jane", email: "jane@jane.com", voted: true},
  {name: "Bo", email: "bo@bo.com", voted: false},
  {name: "Bane", email: "bane@bane.com", voted: false}
]

function extractEmail(){
  let resultFiltered = voters.filter((hasVoted) => {
    return hasVoted.voted === true
  }).map((hasVoted) => {
    return hasVoted.email
  })
  console.log(resultFiltered)
}

document.querySelector('#test-btn').addEventListener('click',extractEmail)
```

This code correctly filters the `voters` array to include only those who have voted, and then maps the filtered array to an array of email addresses. When the button with id 'test-btn' is clicked, the `extractEmail` function is called, which logs the array of email addresses to the console.

silvamha: So I did well?

GitHub Copilot: Yes, you did well. Your code correctly filters the `voters` array to include only those who have voted, and then maps the filtered array to an array of email addresses. When the button with id 'test-btn' is clicked, the `extractEmail` function is called, which logs the array of email addresses to the console. This fulfills the second part of the challenge. Good job!
```

## 04 Additional comments, suggestions and code snipets from Copilot
```JS
silvamha: @workspace /explain Why my rendering is not working?

GitHub Copilot: The issue with your code is likely due to the use of `document.querySelectorAll('.section').innerHtml=renderInfo`. 

`document.querySelectorAll('.section')` returns a NodeList (similar to an array) of all elements with the class 'section'. However, `innerHtml` is a property of an individual element, not of a NodeList.

If you want to set the `innerHtml` of all '.section' elements to `renderInfo`, you need to iterate over the NodeList. Here's how you can do it:

```javascript
document.querySelectorAll('.section').forEach(element => {
    element.innerHTML = renderInfo;
});
```

Also, there seems to be a typo in your template literal for `renderInfo`. You've written `$$webUrl` instead of `${webUrl}`. Here's the corrected version:

```javascript
let renderInfo = `
<div class="container">
<h1 class=${webTitle}></h1>
<p>${webUrl}</p>
</div>
`;
```

With these corrections, your code should work as expected.

silvamha: It still does not work, what could it be? ```// Function to fetch info from The Guardian
function getIdea() {
  fetch(
    "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=e3adcb87-3cbc-4966-bcc2-0437afdc00e3"
  )
    // Displays data fetched from The Guardian
    .then((res) => res.json())
    .then((data) => {
      // Iterate object to get to arrays
      const results = data.response.results;
      results.forEach((item) => {
        const { id, type, sectionName, webTitle, webUrl } = item;

        const testUrl = document.querySelector("#test-url");

        let renderInfo = "";
        renderInfo += `
        <div class="container">
        <h1 class=${webTitle}></h1>
        <p>$webUrl</p>
      </div>
        `;
        console.log(type, sectionName, webTitle, webUrl);
        document.querySelectorAll('.section').forEach((element)=>{
          element.innerHTML= renderInfo
        })
      });

GitHub Copilot: The issue is with the template literals in your `renderInfo` string. You're using `$webUrl` instead of `${webUrl}`. The `$` symbol is used to interpolate variables in template literals, but you need to wrap the variable in curly braces `{}`. 

Here's the corrected version of your code:

```javascript
// Function to fetch info from The Guardian
function getIdea() {
  fetch(
    "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=e3adcb87-3cbc-4966-bcc2-0437afdc00e3"
  )
    // Displays data fetched from The Guardian
    .then((res) => res.json())
    .then((data) => {
      // Iterate object to get to arrays
      const results = data.response.results;
      results.forEach((item) => {
        const { id, type, sectionName, webTitle, webUrl } = item;

        const testUrl = document.querySelector("#test-url");

        let renderInfo = "";
        renderInfo += `
        <div class="container">
        <h1 class=${webTitle}></h1>
        <p>${webUrl}</p>
      </div>
        `;
        console.log(type, sectionName, webTitle, webUrl);
        document.querySelectorAll('.section').forEach((element)=>{
          element.innerHTML= renderInfo
        })
      });
}
```

This should correctly interpolate the `webUrl` variable into your `renderInfo` string, and display the fetched data as expected.

silvamha: Now, it is only displaying the last webUrl in the array and it is not displaying the title.

GitHub Copilot: The issue with the title not displaying is due to a missing space between the `<h1>` tag and `${webTitle}` in your template literal. It should be `<h1>${webTitle}</h1>`. 

As for only the last `webUrl` being displayed, this is because you're setting the `innerHTML` of each `.section` element to `renderInfo` inside the `forEach` loop. This means that each time the loop runs, it overwrites the previous `innerHTML` of the `.section` elements with the new `renderInfo`. 

To fix this, you can append the new `renderInfo` to the existing `innerHTML` of the `.section` elements. Here's the corrected code:

```javascript
// Function to fetch info from The Guardian
function getIdea() {
  fetch(
    "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=e3adcb87-3cbc-4966-bcc2-0437afdc00e3"
  )
    // Displays data fetched from The Guardian
    .then((res) => res.json())
    .then((data) => {
      // Iterate object to get to arrays
      const results = data.response.results;
      results.forEach((item) => {
        const { id, type, sectionName, webTitle, webUrl } = item;

        const testUrl = document.querySelector("#test-url");

        let renderInfo = `
        <div class="container">
        <h1>${webTitle}</h1>
        <p>${webUrl}</p>
      </div>
        `;
        console.log(type, sectionName, webTitle, webUrl);
        document.querySelectorAll('.section').forEach((element)=>{
          element.innerHTML += renderInfo;
        })
      });
}
```

This should correctly display all the `webUrl`s and their corresponding titles.
```