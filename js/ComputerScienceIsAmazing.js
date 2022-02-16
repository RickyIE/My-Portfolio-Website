
const heartCounterClass = document.querySelector(".heartCounter");
const brokenHeartCounterClass = document.querySelector(".brokenHeartCounter");
const textField = document.querySelector(".AlexQuestionnaireWrapperSection2");
const smileyFace = document.querySelector(".smileyFace");
const smileyFaceFront = document.querySelector(".smileyFaceFront");
const smileyFaceBack = document.querySelector(".smileyFaceBack");

var rotation = 0;
var pageCounterYes = 0;
var pageCounterNo=0;


var heartCounter=100;
var brokenHeartCounter =0;

var backgroundSound = new Audio("Images/ComputerScienceIsAmazing/BackgroundTheme.mp3");

// credit - https://www.zapsplat.com/

backgroundSound.play();
backgroundSound.volume = 0.250;
backgroundSound.loop = true;

const yesButton = document.getElementById("yesButton").onclick = () =>{
    var audio = new Audio("Images/ComputerScienceIsAmazing/Yes.mp3");
    // credit - https://www.zapsplat.com/
    audio.play();
    backgroundSound.volume = 0.250;

    smileyFlip("Yes");

    heartCounter = 100;
    brokenHeartCounter = 0;
    heartCounterClass.innerHTML = heartCounter + "%";
    brokenHeartCounterClass.innerHTML = brokenHeartCounter;

    if (pageCounterYes === 0) {

        textField.innerHTML = "O wow if you made it this far you must be bored ... ok then<br/> <br/>" +
            "By the way im a Cancer<br/>" +
            "Always Looking for an answer<br/>"+
            "My heart will tingle <br/>" +
            "May i ask are you single ? ";

        pageCounterYes++;
        pageCounterNo = 0;
        
    } else if (pageCounterYes ===1) {

        textField.innerHTML = "I hope your still awake ... <br/> <br/>" +
            "Oooo that make me hopeful then <br/>" +
            "I get this feeling slightly Zen<br/>"+
            "And if there is the smallest spark<br/>"+
            "Would you like to go for a walk in the park ?";


        pageCounterYes++;
        pageCounterNo = 0;

    }else if (pageCounterYes === 2) {

        textField.innerHTML = "My number is 089 448 2796 ... <br/> <br/>" +
            "Call me if you decide you want to go for a walk in the park <br/>" +
            "Or a walk to the garbage dump <br/>"+
            "Or maybe we can beg together on Conolly Station<br/>" +
            "I dont keep the info from the website so unless you tell me i wont know what you choose";

        pageCounterYes++;
        pageCounterNo = 0;

    }

};
const noButton = document.getElementById("noButton").onclick = () =>{
    var audio = new Audio("Images/ComputerScienceIsAmazing/No.mp3");
    // credit - https://www.zapsplat.com/
    audio.play();
    backgroundSound.volume = 0.250;
    smileyFlip("No");

    heartCounter = heartCounter - 20;
    brokenHeartCounter++;
    if (heartCounter < 0) {
        heartCounter = 0;
    }

    if (pageCounterYes === 0) {

        if (pageCounterNo ===0 ) {

            textField.innerHTML = "Is your mouse broken ... this will open on your phone ?";

            pageCounterNo++;

        } else if (pageCounterNo === 1 ) {

            textField.innerHTML = "I see, you have an important meeting to prepare for maybe ?";

            pageCounterNo++;

        } else if (pageCounterNo === 2) {

            textField.innerHTML = "I know then your cat died and you need to morn so you dont feel like playing games. Im sorry about mister Snickers  ";

            pageCounterNo++;

        }else if (pageCounterNo === 3) {

            textField.innerHTML = "What you dont have a cat you say ? You sure you dont feel like clicking the YES button then?";

            pageCounterNo++;

        }else  if (pageCounterNo === 4) {

            textField.innerHTML = "I suppose there is no time for games. During this pandemic we need more time so we can panic ! I agree :)";

            pageCounterNo++;

        }

    }else if (pageCounterYes === 1) {

        if (pageCounterNo ===0 ) {

            textField.innerHTML = " Ohhh well thats no surprise well hit the yes button if your single one day ... <br/>" +
                "Are you single now ? :)";

            pageCounterNo++;

        } else if (pageCounterNo === 1 ) {

            textField.innerHTML = "How about now ?";

            pageCounterNo++;

        } else if (pageCounterNo === 2) {

            textField.innerHTML = "Maybe now  ?";

            pageCounterNo++;

        }else if (pageCounterNo === 3) {

            textField.innerHTML = "You sure its not now ?";

            pageCounterNo++;

        }else  if (pageCounterNo === 4) {

            textField.innerHTML = "One day i will hang in there !";

            pageCounterNo++;

        }

    }else if (pageCounterYes === 2) {

        if (pageCounterNo === 0) {

            textField.innerHTML = "Wait wait maybe a coffee then ?";

            pageCounterNo++;

        } else if (pageCounterNo === 1) {

            textField.innerHTML = "Take away burritos and a nice walk through town ?";

            pageCounterNo++;

        } else if (pageCounterNo === 2) {

            textField.innerHTML = "Hunt for crocodiles in the sewers, together ?";

            pageCounterNo++;

        } else if (pageCounterNo === 3) {

            textField.innerHTML = "Rob a jewellery shop and hide in the desert ? ";

            pageCounterNo++;

        } else if (pageCounterNo === 4) {

            textField.innerHTML = "Organise a coup of a small island nation and become joint dictators ? ... No :(";

            pageCounterNo++;

        }

    }else if (pageCounterYes === 3) {

            if (pageCounterNo === 0) {

                textField.innerHTML = "Yes you can contact me on facebook instead.";

                pageCounterNo++;

            } else if (pageCounterNo === 1) {

                textField.innerHTML = "I do still like reading letters yes!";

                pageCounterNo++;

            } else if (pageCounterNo === 2) {

                textField.innerHTML = "Im not sure you can answer by morse code the telegraph in my house is broken. ";

                pageCounterNo++;

            } else if (pageCounterNo === 3) {

                textField.innerHTML = "Carried pigeons might get lost text is usually best. ";

                pageCounterNo++;

            } else if (pageCounterNo === 4) {

                textField.innerHTML = "You can try smoke signals instead but try not to light your house on fire.";

                pageCounterNo++;

            }

        }

    heartCounterClass.innerHTML = heartCounter + "%";
    brokenHeartCounterClass.innerHTML = brokenHeartCounter;

};

smileyFlip = (e) => {

    if (e === "Yes" && rotation === 0) {

        smileyFaceBack.style.backgroundImage = "url('Images/ComputerScienceIsAmazing/emoji-4584576_640.png')"
        /* Credit - https://pixabay.com/bg/images/download/emoji-4584576_640.png */
        rotation = 180

    }else if (e === "Yes" && rotation === 180 ){

        smileyFaceFront.style.backgroundImage = "url('Images/ComputerScienceIsAmazing/emoji-4584576_640.png')"
        /* Credit - https://pixabay.com/bg/images/download/emoji-4584576_640.png */
        rotation = 0

    }else if (e === "No" && rotation === 0) {

        smileyFaceBack.style.backgroundImage = "url('Images/ComputerScienceIsAmazing/emoji-4584579_640.png')"
        /* Credit - https://pixabay.com/bg/illustrations/emoji-%D0%B5%D0%BC%D0%BE%D1%82%D0%B8%D0%BA%D0%BE%D0%BD-%D1%83%D1%81%D0%BC%D0%B8%D0%B2%D0%BA%D0%B0-%D0%BA%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B0-4584579/ */
        rotation = 180

    }else if (e === "No" && rotation === 180 ){

        smileyFaceFront.style.backgroundImage = "url('Images/ComputerScienceIsAmazing/emoji-4584579_640.png')"
        /* Credit - https://pixabay.com/bg/illustrations/emoji-%D0%B5%D0%BC%D0%BE%D1%82%D0%B8%D0%BA%D0%BE%D0%BD-%D1%83%D1%81%D0%BC%D0%B8%D0%B2%D0%BA%D0%B0-%D0%BA%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B0-4584579/ */
        rotation = 0

    }


    smileyFace.style.transform = "rotateY("+rotation+"deg)";


}

