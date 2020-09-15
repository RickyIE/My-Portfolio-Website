

let cardArray  = new Array;

const card1 = document.getElementById("Card1").addEventListener("click", cardFlip);
let focused = false;

function cardFlip () {


    if (focused === false) {




        // document.getElementById("Card1").style.transform = "scale(0.400)";
        // document.getElementById("Card1").style.transitionDuration = "1s";

        focused = true;
    }else if (focused === true) {



        // document.getElementById("Card1").style.transform = "scale(1.000)";

        focused = false;
    }

}