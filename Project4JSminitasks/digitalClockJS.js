
// pre load doms
const clock = document.getElementById("digital-time");
const amorpm = document.getElementById("am-pm");
const dualTimeButton = document.getElementById("dual-time");

// Button to switch between 12 hour and 24 hour clock
dualTimeButton.addEventListener("click",switchDualTime );

let buttonToggle = "24" // toggle this variable
function switchDualTime(){
    if (buttonToggle == "24"){
        buttonToggle = "12"
        dualTimeButton.innerText = "Switch to 24 hour";
    }
    else{
        buttonToggle = "24";
        dualTimeButton.innerText = "Switch to 12 hour";
    }
}



// function for time
function currentTime(){
    let now = new Date()            //Set now cariable as date function
    let hours = now.getHours();     // extract hours minutes and seconds from it
    let minutes = now.getMinutes();     
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM"; // run before change of hour so it knows its pm 
    if (buttonToggle == 24){hours = String(hours).padStart(2, "0"); }
    else{hours = hours % 12};
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    

    clock.textContent = (`${hours}:${minutes}:${seconds}`);//set text content of clock to hours/minutes/seconds
    amorpm.textContent = `${ampm}`;
}



setInterval(currentTime, 1000);