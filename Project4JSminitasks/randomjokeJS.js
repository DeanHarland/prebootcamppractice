const jokeText = document.getElementById("joke-text");
const authorText = document.getElementById("author-text");
const nextButton = document.getElementById("next-joke-button");


let jokesArray = [
    {joke:"haha",author:"me" },
    {joke:"hehehe",author:"bob" },
    {joke:"booo",author:"his" },
    {joke:"lol",author:"they" },
    {joke:"roflcopter",author:"you" },

]




function nextJoke(){
    let rand = Math.floor(Math.random() * jokesArray.length);

    jokeText.textContent= jokesArray[rand].joke;
    authorText.textContent = jokesArray[rand].author;   

}
// fetch api joke
function nextOnlineJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke") // request data from site, not actual data but a promise it will,delay
    .then(response => response.json())  //response is the raw HTTP response(headers, status code, body, etc.)
    .then(data => {
      jokeText.textContent = `${data.setup}`;
      authorText.textContent = `${data.punchline}`;
    })
    .catch(error => {   //runs if anything goes wrong
      jokeText.textContent = "Oops! Couldn't load a joke.";
      console.error(error);
    });
}

nextButton.addEventListener("click", nextOnlineJoke);