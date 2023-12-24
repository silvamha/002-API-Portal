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


async function fetchData() {
try {
  const response = await fetch(url, options);
  const result = await response.text();
  document.getElementById('bionicText').innerHTML = result;
} catch (error) {
  console.error(error);
}
}

// fetchData();

async function fetchNumberFact() {
  const url = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      displayResult(result);
  } catch (error) {
      console.error(error);
  }
}

function displayResult(data) {
  const container = document.getElementById('apiResponse');
  // Assuming the API returns a 'text' field in its JSON response
  container.textContent = data.text || 'No data available';
}

// Call the function to fetch and display the number fact
// fetchNumberFact();

async function fetchFinanceData() {
  const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      displayFinanceData(result);
  } catch (error) {
      console.error(error);
  }
}

async function fetchFinanceData() {
  const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
  };



  try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      displayFinanceData(result);
      console.log(result)
  } catch (error) {
      console.error(error);
  }
}




function displayFinanceData(data) {
  const container = document.getElementById('financeData');
  if (data && data.quotes) {
      const list = document.createElement('ul');
      data.quotes.forEach(quote => {
          if (quote.symbol === 'TSLA') {
              const listItem = document.createElement('li');
              listItem.textContent = `Symbol: ${quote.symbol}, Name: ${quote.longname}`;
              list.appendChild(listItem);
          }
      });
      container.appendChild(list);
  } else {
      container.textContent = 'No finance data available';
  }
}





// Call the function to fetch and display the finance data
// fetchFinanceData();

async function fetchFinanceNews() {
  const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      displayNews(jsonData.news); // Assuming 'news' is the correct field
  } catch (error) {
      console.error(error);
  }
}

function displayNews(newsItems) {
  const container = document.getElementById('financeNews'); // Make sure this exists in your HTML
  newsItems.forEach(newsItem => {
      // Create an anchor element for the news link
      const newsLink = document.createElement('a');
      newsLink.href = newsItem.link;
      newsLink.textContent = newsItem.title;
      newsLink.target = '_blank'; // To open link in new tab
      
      // If there's an image, create an img element
      if (newsItem.image) {
          const image = document.createElement('img');
          image.src = newsItem.image;
          image.alt = newsItem.title;
          container.appendChild(image);
      }

      container.appendChild(newsLink);

      // Optionally, create a paragraph or div for a news summary or other details
      // ...

      // Add a separator (like a horizontal rule or just some space)
      container.appendChild(document.createElement('hr'));
  });
}

// Call the function to fetch and display the finance news
// fetchFinanceNews();


async function fetchCompanyDetails() {
  const url = 'https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol?symbol=twtr';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your actual API key
          'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const jsonData = await response.json(); // Parse the JSON response
      displayCompanyDetails(jsonData);
  } catch (error) {
      console.error(error);
  }
}

function displayCompanyDetails(details) {
  const container = document.getElementById('companyDetails');
  // Assuming the JSON has a property named 'companyName' and 'description'
  const companyName = document.createElement('h2');
  companyName.textContent = details.companyName || 'Company Name not available';

  const companyDescription = document.createElement('p');
  companyDescription.textContent = details.description || 'Description not available';

  // Clear the container before appending new details
  container.innerHTML = '';
  container.appendChild(companyName);
  container.appendChild(companyDescription);

  // Add other details you want to display in a similar fashion
  // ...
}

// Call the function to fetch and display the company details
// fetchCompanyDetails();


async function fetchMovies() {
  const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'YOUR_ACTUAL_API_KEY', // Replace with your actual API key
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const data = await response.json(); // Parse the JSON response
      displayMovies(data);
  } catch (error) {
      console.error(error);
  }
}

function displayMovies(data) {
  const container = document.getElementById('moviesContainer'); // Make sure this exists in your HTML
  if (data.Search) {
      data.Search.forEach(movie => {
          const movieElement = document.createElement('div');

          const title = document.createElement('h3');
          title.textContent = movie.Title;

          const poster = document.createElement('img');
          poster.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image-url'; // Replace with a placeholder image if needed
          poster.alt = movie.Title;

          movieElement.appendChild(title);
          movieElement.appendChild(poster);
          
          // You can add more details here, like year, type, etc.
          
          container.appendChild(movieElement);
      });
  } else {
      container.textContent = 'No movies found';
  }
}

// Call the function to fetch and display movies
// fetchMovies();

async function fetchVoices() {
  const url = 'https://text-to-speech-neural-google.p.rapidapi.com/v1/synthesis/client-voices';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'
      }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }
    const data = await response.json(); // Parse the JSON response
    console.log(data); // Log the data to inspect its structure

    if (data && Array.isArray(data.voices) && data.voices.length > 0) {
        // Proceed if 'voices' is an array and has at least one element
        setupTextToSpeechButton(data.voices[0]);
    } else {
        // Handle the case where 'voices' doesn't exist or is empty
        console.error('Voices array is empty or not in the expected format:', data);
        // You may want to provide a message to the user or attempt a retry
    }
} catch (error) {
    console.error('Error fetching voices:', error);
}


// ...
}
function setupTextToSpeechButton(voice) {
  const button = document.getElementById('readTextButton');
  button.addEventListener('click', () => {
      const textToRead = document.getElementById('textToRead').textContent;
      readText(textToRead, voice);
  });
}

async function readText(text, voice) {
  // In a real application, here you would make a POST request to the API endpoint
  // that performs the text-to-speech conversion using the selected voice
  // For demonstration, we just log the action
  console.log(`The text "${text}" would be read with the voice "${voice.name}".`);
  
  // Dummy audio URL - replace with the actual URL received from the API
  const audioUrl = 'URL_TO_AUDIO_FILE_FROM_API'; // Placeholder URL

  const audioContainer = document.getElementById('audioContainer');
  const audioElement = document.createElement('audio');
  audioElement.src = audioUrl;
  audioElement.controls = true;
  audioContainer.innerHTML = ''; // Clear any previous audio elements
  audioContainer.appendChild(audioElement);
  audioElement.play();
}

// Fetch and display the voices when the page loads
// fetchVoices();

async function fetchSummary() {
  const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
  const options = {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
      },
      body: JSON.stringify({
          url: 'https://vishalkukreja.com/how-to-access-nested-arrays-and-objects-in-javascript/',
          min_length: 100,
          max_length: 300,
          is_detailed: false
      })
  };

  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
      }
      const data = await response.json(); // Parse the response as JSON
      document.getElementById('summaryContainer').textContent = data.summary || 'Summary not available';
  } catch (error) {
      console.error('Error fetching summary:', error);
      document.getElementById('summaryContainer').textContent = 'Failed to load summary.';
  }
}

// fetchSummary();

document.getElementById('speakButton').addEventListener('click', function() {
  synthesizeSpeech('hello, what is your name?');
});

async function synthesizeSpeech(text) {
  const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize';
  const options = {
      method: 'POST',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '130c1d6c0amshc859a2934f671afp15fffdjsn621f25f6e81f', // Replace with your actual API key
          'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      },
      body: new URLSearchParams({
          voice_code: 'en-US-1',
          text: text,
          speed: '1.00',
          pitch: '1.00',
          output_type: 'audio_url'
      })
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the JSON response
    console.log(data); // Log the full response to inspect what is returned

    // Check if the 'result' object is present and has an 'audio_url' field
    if (data && data.result && data.result.audio_url) {
        const audioContainer = document.getElementById('audioContainer');
        const audioElement = document.createElement('audio');
        audioElement.src = data.result.audio_url;
        audioElement.controls = true;
        audioElement.autoplay = true; // Note: Some browsers block autoplay
        audioContainer.innerHTML = ''; // Clear any previous audio elements
        audioContainer.appendChild(audioElement);
    } else {
        console.error('The API response does not contain an audio URL:', data);
        // Handle the lack of an audio_url appropriately
    }
} catch (error) {
    console.error('Error synthesizing speech:', error);
}
}





