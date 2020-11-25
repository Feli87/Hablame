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