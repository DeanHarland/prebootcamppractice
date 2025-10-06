
// Pre set get element id for ease of use
const numberCounter = document.getElementById("number-variable");
const decreaseButton = document.getElementById("decrease-button");
const increaseButton = document.getElementById("increase-button");
const resetButton = document.getElementById("reset-button");

// counter and current
let count = 0;


// Button click for function
decreaseButton.addEventListener("click",decreaseNumberFunction );
increaseButton.addEventListener("click",increaseNumberFunction );
resetButton.addEventListener("click",resetNumberFunction );


// Decrease the number count and adjust color
function decreaseNumberFunction(){
    count--;
    numberCounter.textContent = count;
    if (count<0){
        numberCounter.style.color = "red";
    }
    if (count==0){
        numberCounter.style.color = "black";
    }
    

}
// Increase the number count and adjust color
function increaseNumberFunction(){
     count++;
    numberCounter.textContent = count;
    if (count>0){
        numberCounter.style.color = "green";
    }
    if (count==0){
        numberCounter.style.color = "black";
    }
}
// reset number and set black
function resetNumberFunction(){
    numberCounter.textContent = 0;
    count = 0;
    numberCounter.style.color = "black"
}