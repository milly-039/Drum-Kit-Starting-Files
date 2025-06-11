for(var i= 0; i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//alert("click");// this is the identity of the button that triggered the event listner
//this.style.color = "white";
var buttoninnerhtml = this.innerHTML;
Pressk(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);
});
}
function Pressk (key){
    this.key= key;
    switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play(); 
        break;

        case "a":
           var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();  
        break;

         case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();  
        break;
        case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();  
        break;

        case "j":
           var snare = new Audio("sounds/snare.mp3");
        snare.play();  
        break;

        case "k":
           var crash = new Audio("sounds/crash.mp3");
        crash.play();  
        break;

        case "l":
           var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
        break;

        

    default:console.log();
        break;
}
}
document.addEventListener("keydown",function(event){
   buttonAnimation(event.key);
    Pressk(event.key);//callback of event uspein bhi specifically konsi key press hui// callback function is called by the object that experiences the "oress " ya event/"click"
});

function buttonAnimation(currentKey){
   var activeButton=  document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}
//contructor fxn---- function BellBoy (name,age,hasWorkPermit,languages){
//}this.name = name;
//this.age = age;
// this.hasWorkPermit = hasworkPermit;
//this.languages = languages;
//initalise object--
// 
// 
// 
// 
//var bellboy1 = new BellBoy ("timmy", 19, true,["french","english"]);

//method is a func asociated with a object 
//movesuitcase:function(){
//alert("jkdk");
//pickup();
//move();}
//in order to call a certain method; we need to initialse the object of which it is a part/ anonymous function of;






















// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();