


const cardList = document.getElementsByClassName("Card"); // card class array

const cardListArrayDefaultValues = []; // store the values fom HTML card plaques


var result;


for (var i=0; i<5; i++) {

    cardListArrayDefaultValues[i] = [

        cardList[i].id,
        cardList[i].childNodes[5].childNodes[1].id,
        cardList[i].childNodes[3].childNodes[3].innerHTML


    ];
    // console.table(cardListArrayDefaultValues);
}



const cardPlaques = document.getElementsByClassName("CardLeftButton"); //array getting all LeftButton elements

for (var i=0; i<cardPlaques.length; i++) { //adds event listeners to all elements
    cardPlaques[i].addEventListener("click", cardPlaqueChangeText);
    cardPlaques[i].childNodes[1].addEventListener("click", cardPlaqueChangeText)
}




function cardPlaqueChangeText (e) {

    var target = e.target;
    var targetParent = e.target.parentElement;
    var chosenCard;
    var newPlaqueValue;

    for (var j=0; j<cardList.length; j++) {
        if(cardList[j].childNodes[5].childNodes[1].id === target.id
        || cardList[j].childNodes[5].childNodes[1].id === targetParent.id){
            chosenCard = cardList[j];
            break;
        }
    }

    var chosenCardPlaque = chosenCard.childNodes[5].childNodes[1];

    switch (chosenCardPlaque.id) {

        case "Plaque0":

            newPlaqueValue = "Complete October 2019 <br /> HTML <br /> lines of code: 61 "

            cardControl(chosenCard,chosenCardPlaque);

            break;

        case "Plaque1":

            newPlaqueValue = "Complete November 2019 <br /> HTML/CSS <br /> lines of code: 61 "

            cardControl(chosenCard,chosenCardPlaque);

            break;

        case "Plaque2":

            newPlaqueValue = "Complete January 2020 <br /> HTML/CSS <br /> lines of code: 61 "

            cardControl(chosenCard,chosenCardPlaque);

            break;

        case "Plaque3":

            newPlaqueValue = "Complete March 2020 <br /> HTML/CSS/JS <br /> lines of code: 61 "

            cardControl(chosenCard,chosenCardPlaque);

            break;

        case "Plaque4":

            newPlaqueValue = "Complete May 2020 <br /> HTML/CSS/JS <br /> lines of code: 61 "

            cardControl(chosenCard,chosenCardPlaque);

            break;



    }


    function cardControl (chosenCard,chosenCardPlaque ) {


        console.log("chosenCardPlaque.id")
        console.log(chosenCardPlaque.id)

        loopThroughCardListDefaultValues(chosenCardPlaque.id, 0, 2)


        if (chosenCard.childNodes[3].childNodes[3].innerHTML === result) {
            chosenCard.childNodes[3].childNodes[3].innerHTML = newPlaqueValue;
            cardPlaqueSabres(chosenCard)

        } else {
            chosenCard.childNodes[3].childNodes[3].innerHTML = result
            cardPlaqueSabres(chosenCard)
        }

    }



};



function loopThroughCardListDefaultValues (cardPlaque) {

    console.log(cardPlaque)
    console.log(cardListArrayDefaultValues)

    outer:

    for (var i=0; i<cardListArrayDefaultValues.length; i++){
        for (var j=0; j<cardListArrayDefaultValues.length; j++) {
            if (cardPlaque === cardListArrayDefaultValues[i][j]){

                result = cardListArrayDefaultValues[i][j+1]

                break outer;
            }

        }
    }

}


cardPlaqueSabres =(card)=> {

    if (window.getComputedStyle(card.childNodes[3].childNodes[1]).display === "none") {
        card.childNodes[3].childNodes[1].style.display = "flex";
        card.childNodes[3].childNodes[1].style.transitionDuration = "1s";
        card.childNodes[3].childNodes[1].style.width = "100%";
        card.childNodes[3].childNodes[5].style.display = "flex";
        card.childNodes[3].childNodes[5].style.transitionDuration = "1s";
        card.childNodes[3].childNodes[5].style.width = "100%";
    }else{
        card.childNodes[3].childNodes[1].style.display = "none";
        card.childNodes[3].childNodes[1].style.transitionDuration = "1s";
        card.childNodes[3].childNodes[1].style.width = "0%";
        card.childNodes[3].childNodes[5].style.display = "none";
        card.childNodes[3].childNodes[5].style.transitionDuration = "1s";
        card.childNodes[3].childNodes[5].style.width = "0%";

    }


}







/*                 FOR TESTING element target function                  */

// window.onclick = e => {
//     console.log("ITEM CLICKED")
//     console.log(e.target);
//     console.log("PARENT ELEMENT")
//     console.log(e.target.parentNode);
//     console.log("CHILDREN ELEMENT")
//     console.log(e.target.children);
//     console.log(e.target.children[1]);
//     console.log(cardsClassArray);
// }
//
// window.onkeypress = e => {
//
//     var keyPressed = e.key;
//
//     if (keyPressed === "Enter") {
//         // console.table(cardListArrayDefaultValues);
//
//
//     }
// }


/*                 FOR TESTING element target function                  */
