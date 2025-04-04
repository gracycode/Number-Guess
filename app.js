let number = Math.trunc(Math.random() * 30 + 1);
console.log(number);
let guessCount = 0;
const guessElement = document.getElementById("guesses");


document.querySelector(".inputguess").addEventListener("click", function(){
    const guess = Number(document.querySelector(".insertguess").value);
    console.log(guess, 3);
    document.querySelector(".insertguess").value = "";

    if(!guess){
        document.querySelector(".message").innerText = "No input";
        guessCount++;
        guessElement.textContent = guessCount;
        
    } else if (guess === number){
        document.querySelector(".message").innerText = "Congratulations! you guessed right";
        document.querySelector("main").style.backgroundColor = "#00ff00";
        guessCount++;
        guessElement.textContent = guessCount;
        
    } else if (guess < number){
        document.querySelector(".message").innerText = `${"my number is greater than"} ${guess}`;
        guessCount++;
        guessElement.textContent = guessCount;
        
    } else {
        document.querySelector(".message").innerText = `${"my number is less than"} ${guess}`;
        guessCount++;
        guessElement.textContent = guessCount;
        
    }
})

//to refresh the page when the "New game" button is clicked
const newGame = document.getElementById("new-game");
newGame.addEventListener("click", () =>{
    location.reload();
})