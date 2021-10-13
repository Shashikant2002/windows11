let TaskBar = document.getElementsByClassName("TaskBar")[0]
let StartMenu = document.getElementsByClassName("startmenu")[0]

TaskBar.addEventListener("click", () =>{
    if(StartMenu.style.bottom == "50px"){
        StartMenu.style.bottom = "-540px"
    }
    else{
        StartMenu.style.bottom = "50px"
    }
})