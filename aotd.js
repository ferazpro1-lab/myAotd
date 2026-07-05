

async function getAdvice(){
    try{
         const clearJoke2 = document.getElementById("TextShows")
          const clearJoke = document.getElementById("JokeCon")
    clearJoke.textContent = "";
    clearJoke2.textContent ="Getting Advice...⏳";
   
    const response = await fetch("https://api.adviceslip.com/advice");
    if(!response.ok){
        throw new Error("Couldn't get advice😢")
    }
   

    const advice = await response.json();
   
    const buttonElement = document.getElementById("btn");
    const adviceElement = document.getElementById("TextShows");
    const JokebtnElement = document.getElementById("jokebtn");

    buttonElement.addEventListener("click", async => {
        buttonElement.disabled = true
        JokebtnElement.disabled = true
        adviceElement.textContent = "Getting Advice...⏳"
    }
    )
    
    adviceElement.textContent = `${advice.slip.advice}`;
    buttonElement.disabled = false;
    JokebtnElement.disabled = false;
        }
    catch(error){
        console.error(error);
    }
}

async function getJoke(){
    try{
        
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if(!response.ok){
        throw new Error("Couldn't get the joke😢")
    }
   

    const joke = await response.json();
    const buttonElement = document.getElementById("btn");
    const btnElement = document.getElementById("jokebtn");
    const jokeElement = document.getElementById("TextShows");
    const jokeContinue = document.getElementById("JokeCon");
    
    btnElement.addEventListener("click", async => {
        buttonElement.disabled = true
        btnElement.disabled = true
        jokeElement.textContent = "Getting a joke...👻"
    }
    )
    jokeElement.textContent = `${joke.setup}`;
    jokeContinue.textContent = `${joke.punchline.toUpperCase() + " AHAHHAHAHAHAHA"}`
    btnElement.disabled = false;
    buttonElement.disabled = false;
        }
    catch(error){
        console.error(error);
    }
}