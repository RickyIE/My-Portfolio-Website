



const cardsClassArray= document.getElementsByClassName('Card'); // every element in the cards class inside this arrary
const overlay = document.querySelector(".OverLay");
const projectsWrapper = document.getElementById("ProjectsWrapper");
let currentCardOnDisplay;

const closeButton = document.getElementById("HalloButtonClose").onclick = ()=>{
    cardFlip(currentCardOnDisplay);
};

let cardsOriginalValues=[];
var flipped = false;



/*                 FOR TESTING element target function                  */

window.onclick = e => {
    console.log("ITEM CLICKED")
    console.log(e.target);
    console.log("PARENT ELEMENT")
    console.log(e.target.parentNode);
    console.log("CHILDREN ELEMENT")
    console.log(e.target.children);
    console.log(e.target.children[1]);
    console.log(cardsClassArray);
}


/*                 FOR TESTING element target function                  */




cardsStack = document.onclick = () => {


    let clickedElement = event.target;

    for (i=0; i<cardsClassArray.length; i++) {

        if (clickedElement === cardsClassArray[i] || clickedElement.parentElement === cardsClassArray[i]){
            cardFlip(cardsClassArray[i]);
            break;
        }
    }
};



styleArray = () => { // store all the original values for the cards



    for (i=0; i<cardsClassArray.length; i++){

        cardsOriginalValues [i] = [
            cardsClassArray[i],
            window.getComputedStyle(cardsClassArray[i]).transform,
            window.getComputedStyle(cardsClassArray[i]).zIndex,
            window.getComputedStyle(cardsClassArray[i]).rotate,
            cardsClassArray[i].parentElement.className
        ];

    }
    console.table(cardsOriginalValues)
    console.log(cardsClassArray);
}




function cardFlip(card){

        currentCardOnDisplay = card;


        if (flipped === false) {
            card.style.transform = "scale(0.3)";
            card.style.zIndex = "2000";
            card.style.rotate = "-10deg";
            document.querySelector(".HaloIcon").appendChild(card);


            projectsWrapper.style.filter = "blur(10px)";
            overlay.style.display = "grid";
            flipped = true;
        }
        else if (flipped === true) {
            console.log("else");
            for(i=0; i<cardsOriginalValues.length; i++) {
                    console.log(card);
                    console.log(i);
                if (card === cardsOriginalValues[i][0]) {

                    card.style.transform = cardsOriginalValues [i][1]
                    card.style.zIndex = cardsOriginalValues [i][2];
                    card.style.rotate = cardsOriginalValues [i][3];
                    var cardClassName = "." + cardsOriginalValues [i][4];
                    document.querySelector(cardClassName).appendChild(card);
                    break;
                }
            }


            projectsWrapper.style.filter = "none";
            overlay.style.display = "none";
            flipped = false;
        }
}

styleArray();