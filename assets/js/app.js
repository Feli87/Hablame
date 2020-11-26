// Add a single command
const input = document.getElementById("input");

var Jarvis = new Artyom();

// Needed user interaction at least once in the website to make
// it work automatically without user interaction later... thanks google .i.
document.getElementById("btn").addEventListener("click", function(){
    if(input.value !== ""){
        Jarvis.say(input.value, {
    lang:"es-ES"
});

    }else{
        Jarvis.say("Escribe algo en el input", {
            lang:"es-ES"
        });
    }
}, false);


/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!  Configuracion Modal Config  !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
// Get the modal
var modalConfig = document.getElementById("modal-config");
// Get the button that opens the modal
var btnConfig = document.getElementById("btn-config");
// Get the <span> element that closes the modal
var modalClose = document.getElementsByClassName("close-config")[0];
// When the user clicks on the button, open the modal
btnConfig.onclick = ()=> modalConfig.style.display = "block"; 
// When the user clicks on <span> (x), close the modal
modalClose.onclick = ()=> modalConfig.style.display = "none";
// When the user clicks anywhere outside of the modal, close it
window.onclick = event => event.target == modalConfig ? modalConfig.style.display = "none" : "";