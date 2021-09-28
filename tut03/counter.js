//Task 1 - Display a 0
const counter = document.getElementById("counter");
counter.innerText = "0";

//Task 2 - Increase the count on pressing +
const increment = document.getElementById("increment");
increment.addEventListener("click", event => {
    let currentCount = parseInt(counter.innerText);
    if(currentCount >= 10) {
        alert("cant increase anymore");
    }else{
        counter.innerText = currentCount + 1;
    }
})

//Task 3 - Decrease the count on pressing -
const decrement = document.getElementById("decrement");
decrement.addEventListener("click", event => {
    let currentCount = parseInt(counter.innerText);
    if(currentCount <= 0){
        alert("cant decrease anymore");
    }else{
        counter.innerText = currentCount - 1;
    } 
})

