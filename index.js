for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",Clicks);
}

function Clicks(){
    var sound=this.innerHTML;
    handleClick(sound);
    animation(sound);
}


function handleClick(ch){

    
    switch(ch){
        case "w":
            new Audio("sounds/tom-1.mp3").play()
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play()
            break; 
        case "s":
            new Audio("sounds/tom-3.mp3").play()
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play()
            break;
        case "j":
            new Audio("sounds/snare.mp3").play()
            break;  
        case "k":
            new Audio("sounds/crash.mp3").play()
            break; 
        case "l":
            new Audio("sounds/kick-bass.mp3").play()
            break; 

        default:
            console.log("this");
            
           
    }

    
}

document.addEventListener("keydown",function(event){
    handleClick(event.key);
    animation(event.key);
})


function animation(currentKey){
  var pressedOne=  document.querySelector("."+currentKey);
  pressedOne.classList.add("pressed");
  setTimeout(function(){
    pressedOne.classList.remove("pressed");
  },100);
}