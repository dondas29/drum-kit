var element = document.querySelectorAll(".drum");
for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
        var cas = this.innerHTML;
        makesound(cas);
        
    });
}
function makesound(key){
    switch (key) {
        case "A":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "S":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "D":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "E":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "J":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "K":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "L":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        default:
            break;
    }
}
document.addEventListener("keypress" ,function (event){
    makesound (event.key.toUpperCase());
   
 
});