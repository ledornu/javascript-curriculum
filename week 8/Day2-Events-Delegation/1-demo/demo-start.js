// =============================================================
// Day 2 Demo: Event Lab
// Live-code each station in order. Follow DEMO-GUIDE.md.
//      
 

// =============================================================

   
// grab the html element we need to work with
const test 
// STATION 1: click → addEventListener("click", handler)
// attach event listeners to the element 
testBtn.addeventlistener?("click", handleclick);




// STATION 2: input + keydown → the event object (event.target.value, event.key)
//grab the elements
const likeBtn = document.getElementById("like-Btn");
const pelement = document.getElementById("like-Btn");
// create a funtion to handle the event (input event)



// STATION 3: submit → event.preventDefault()

// grab listener to the element 
const inputElem = document.getElementById("name-input");
const spanElem = document.getElementById("name-preview");

// create a funtion to handle the event (click event)
function handleinput(event) {
    const inputvalue = event.target.value.trim();
    if (inputvalue === "") {
        spanElem.textContent = "anonymous";
    } else {
        spanElem.textContent = inputvalue;

    }
}

// attach event listeners to the element
inputElem.addEventListener("input",handleinput);



// STATION 4: bubbling → listeners on outer, middle, inner; stopPropagation()
//grab the elements
const subscribeform = document.getElementById("signup-form");
const emailInput = document.getElementByIdO("email")
const pMessage = document.getElementById("form-message");

// create a function to handle the event (submit event)
function handlesubmit(event) {
    pMessage.textContent = `thank you ${emailInput.value}for subscribing!`
    subscribeform.reset();
} 

//attach event listener to the element
subscribeform.addEventListener("submit", handleformsubmit);



// STATION 5: delegation → ONE listener on the <ul>, use event.target.closest()
//grab the element
const btnfruitElem = document.getElementById("btn-fruit");

// create a functions to the handle the event (mouseover, mouseout) events
function handlemouseOver() {
    btnfruitElem.style.backgroundColor = "lightblue";
}
function handlemouseOut() {
    btnfruitElem.style.backgroundColor = "";
}

//attach event listeners to the element
btnfruitElem.addEventListener("mouseover", handlemouseOver);
btnfruitElem.addEventListener("mouseOut", handlemouseOut) 


