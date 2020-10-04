



let cardsClassArray= document.getElementsByClassName('Card'); // every element in the cards class inside this arrary
const overlay = document.querySelector(".OverLay");
const projectsWrapper = document.getElementById("ProjectsWrapper");


let currentCardOnDisplay;

const closeButton = document.getElementById("HalloButtonClose").onclick = ()=>{
    cardFlip(currentCardOnDisplay);
};


let cardsOriginalValues=[];
var flipped = false;


/* ------------------------------ Overlay Builder ------------------------------ */

var documentTabsSelector = document.querySelector(".DocumentTabs");
var documentButton = [];
var documentButtonInner = [];
var codeTabsSelector = document.querySelector(".CodeTabs");
var codeTabButton = [];
var codeTabButtonInner = [];
var gitHubOverlayLink = document.getElementById("ViewFullCodeLink");
var downloadCodeOverlayLink = document.getElementById("HalloButtonDownloadCodeLink");
var projectReference;




for (var i=0; i<cardsClassArray.length; i++) {
        cardsClassArray[i].addEventListener("click", function (e){

            let clickedElement = e.target;

            console.log("cardsClassArray[i]")

            console.log(cardsClassArray[i])

            console.log(e.target)



            for (i=0; i<cardsClassArray.length; i++) {

                if (clickedElement === cardsClassArray[i] ||
                    clickedElement.parentElement === cardsClassArray[i] ||
                    clickedElement === cardsClassArray[i].childNodes[5].childNodes[3] ||
                    clickedElement === cardsClassArray[i].childNodes[5].childNodes[3].childNodes[1]){

                    overlayBuilder(cardsClassArray[i]);
                    break;
                }
            }

            // cardsClassArray[i].childNodes[5].childNodes[3]

    })
}



/* ------------------------------ Overlay Builder ------------------------------ */



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


/*                 FOR TESTING element target function                  */





// cardsStack = document.onclick = (e) => {
//
//
//     let clickedElement = e.target;
//
//     // console.log(clickedElement)
//     //
//     // console.log(cardsClassArray[0].childNodes[5].childNodes[3])
//     //
//     // console.log(cardsClassArray[0].childNodes[5].childNodes[3].childNodes[1])
//
//     for (i=0; i<cardsClassArray.length; i++) {
//
//         if (clickedElement === cardsClassArray[i] || clickedElement.parentElement === cardsClassArray[i]){
//
//             overlayBuilder(cardsClassArray[i]);
//             break;
//         }
//     }
// };



styleArray = () => { // store all the original values for the cards



    for (i=0; i<cardsClassArray.length; i++){

        cardsOriginalValues [i] = [
            cardsClassArray[i],
            window.getComputedStyle(cardsClassArray[i]).transform,
            window.getComputedStyle(cardsClassArray[i]).zIndex,
            window.getComputedStyle(cardsClassArray[i]).rotate,
            cardsClassArray[i].parentElement.className,
            window.getComputedStyle(cardsClassArray[i]).animationDuration
        ];

    }
    // console.table(cardsOriginalValues)
    // console.log(cardsClassArray);
}


function overlayBuilder (e) { // build overlay for each project depending on card clicked



    for (var i=0; i<cardsClassArray.length; i++) {
        if (e === cardsClassArray[i]){


            var programingTabs = [];

            // console.log(documentButton.length);

            if (documentButton.length > 0) {

                buttonRemoval();

            }


            var passedReference;

            switch (cardsClassArray[i].id) {




                case "MyFirstWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-2"; // AMEND
                    downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMySecondWebsite.zip"; // AMEND
                    projectReference = "MySecondtWebsite"; // AMEND



                    for (var j=0; j<3; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/Introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/Introduction.pdf";

                    }

                    documentButtonInner[1].textContent = "Document Requirements";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/Requirements.pdf";

                    }

                    documentButtonInner[2].textContent = "View Website";

                    documentButtonInner[2].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsArchive/0001_MyFirstWebsite/index.html";

                    }

                    for (var k=0; k<2; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/index.pdf";

                    codeTabButtonInner[0].textContent = "index.html";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/index.pdf";

                    }

                    codeTabButtonInner[1].textContent = "facts.html";

                    codeTabButtonInner[1].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/facts.pdf";

                    }


                    cardFlip(cardsClassArray[i]);
                    break;


                case "MySecondWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-2"; // AMEND
                    downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMySecondWebsite.zip"; // AMEND
                    projectReference = "MySecondWebsite"; // AMEND



                    for (var j=0; j<3; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/Introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/Introduction.pdf";

                    }

                    for (var k=0; k<6; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsArchive/0001_MySecondWebsite/PreviewDocs/index.pdf"

                    codeTabButtonInner[0].textContent = "index.html";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsArchive/0001_MyFirstWebsite/PreviewDocs/index.pdf"

                    }


                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyThirdWebsite":

                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyForthWebsite":

                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyFifthWebsite":

                    cardFlip(cardsClassArray[i]);
                    break;


            }

            break;
        }
    }

    function buttonRemoval () {

        // console.log(documentButton.length)


        for (var i=0; i<documentButton.length; i++) {
            documentButton[i].remove();
        }

        for (var j=0; j<codeTabButton.length; j++) {
            codeTabButton[j].remove();
        }

        documentButton.splice(0,documentButton.length) ; // Clear variables from array
        documentButtonInner.splice(0,documentButtonInner.length); // Clear variables from array
        codeTabButton.splice(0,codeTabButton.length) ; // Clear variables from array
        codeTabButtonInner.splice(0,codeTabButtonInner.length); // Clear variables from array

        // console.log(documentButton)
        // console.log(codeTabButton)



    }

}

function overlayButtonsControl (e) {
    alert(e)
}




function cardFlip(card){

        currentCardOnDisplay = card;


        if (flipped === false) {
            card.style.transform = "scale(0.3)";
            card.style.zIndex = "2000";
            card.style.rotate = "-5deg";
            document.querySelector(".HaloIcon").appendChild(card);

            projectsWrapper.style.filter = "blur(10px)";
            overlay.style.display = "grid";
            flipped = true;
            console.log(card)
        }
        else if (flipped === true) {
            for(var i=0; i<cardsOriginalValues.length; i++) {
                if (card === cardsOriginalValues[i][0]) {

                    card.style.transform = cardsOriginalValues [i][1]
                    card.style.zIndex = cardsOriginalValues [i][2];
                    card.style.rotate = cardsOriginalValues [i][3];
                    var cardClassName = "." + cardsOriginalValues [i][4];
                    document.querySelector(cardClassName).append(card);
                    break;
                }
            }


            projectsWrapper.style.filter = "none";
            overlay.style.display = "none";
            flipped = false;
        }
}



styleArray();