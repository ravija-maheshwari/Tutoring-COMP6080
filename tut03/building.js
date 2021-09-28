//Get the div with id = building
const building = document.getElementById("building");

//Task 1 - Add 9 windows
for (let i = 0; i < 9; i++) {
    const windowElement = document.createElement("div");

    //CSS
    windowElement.style.height = "50px";
    windowElement.style.width = "50px";
    windowElement.style.margin = "25px";
    windowElement.style.display = "inline-block";

    //Class
    windowElement.className = "window";

    //Append window to building
    building.append(windowElement);
}


//Task 2 - Delete / Add windows
document.addEventListener("keydown", event => {
    if(event.key === "ArrowUp") {
        //Add window
        const windowElement = document.createElement("div");

        //CSS
        windowElement.style.height = "50px";
        windowElement.style.width = "50px";
        windowElement.style.margin = "25px";
        windowElement.style.display = "inline-block";

        //Add CSS Class
        windowElement.className = "window";

        //Append window to building
        building.append(windowElement);
    }

    if(event.key == "ArrowDown") {
        //If building has children, then remove it
        building.removeChild(building.lastChild)
    }
})

//Task 3 - Move building
document.addEventListener("keydown", event => {
    if(event.key === "ArrowRight") {
        building.style.left =  (building.offsetLeft + 50) + "px";
    }
    if(event.key === "ArrowLeft") {
        building.style.right =  (building.offsetLeft - 50) + "px";
    }
})

//Task 4 - toggle an attribut (night)
document.addEventListener("mousedown", event => {
    console.log(event);
    const body = document.body;
    if(body.hasAttribute("night")) {
        body.removeAttribute("night");
    }else{
        body.setAttribute("night", "");
    }
})