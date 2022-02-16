

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

            // console.log("cardsClassArray[i]")
            //
            // console.log(cardsClassArray[i])
            //
            // console.log(e.target)



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
//
//     console.log("ITEM CLICKED")
//     console.log(e.target);
//     console.log("PARENT ELEMENT")
//     console.log(e.target.parentNode);
//     console.log("CHILDREN ELEMENT")
//     console.log(e.target.children);
//     console.log(e.target.children[1]);
//     console.log(cardsClassArray);
//
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


            // console.log(documentButton.length);

            if (documentButton.length > 0) {

                buttonRemoval();

            }


            switch (cardsClassArray[i].id) {


                /****************************************** Template ******************************************/

                // gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-2"; // AMEND
                //     downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMySecondWebsite.zip"; // AMEND
                //     projectReference = "MySecondWebsite"; // AMEND
                //
                //
                //
                //     for (var j=0; j<3; j++) { // AMEND
                //         documentButton[j] = document.createElement('div');
                //         documentButton[j].setAttribute('class', 'DocumentButton');
                //         documentTabsSelector.appendChild(documentButton[j]);
                //
                //         documentButtonInner[j] = document.createElement("div");
                //         documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                //         documentButtonInner[j].textContent = "Placeholder";
                //         documentButton[j].appendChild(documentButtonInner[j]);
                //
                //     }
                //
                //     document.getElementById("populateDocumentsIframe").src = "https://www.meetalex.org/0002-My-Second-Website/index.html"  // AMEND
                //
                //     documentButtonInner[0].textContent = "View Website";
                //
                //     documentButtonInner[0].onclick = () => {
                //         document.getElementById("populateDocumentsIframe").src="https://meetalex.org/0001-My-First-Website/index.html";
                //
                //     }
                //     documentButtonInner[1].textContent = "Open Website in a Separate Window";
                //
                //     documentButtonInner[1].onclick = () => {
                //         window.open("https://meetalex.org/0001-My-First-Website/index.html");
                //
                //     }
                //
                //
                //
                //     for (var k=0; k<6; k++) {
                //         codeTabButton[k] = document.createElement('div');
                //         codeTabButton[k].setAttribute('class', 'CodeTabButton');
                //         codeTabsSelector.appendChild(codeTabButton[k]);
                //
                //         codeTabButtonInner[k] = document.createElement("div");
                //         codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                //         codeTabButtonInner[k].textContent = "Placeholder";
                //         codeTabButton[k].appendChild(codeTabButtonInner[k]);
                //
                //     }
                //
                //     document.getElementById("populateCodeIframe").src = "ProjectsData/0002_MySecondWebsite/PreviewDocs/index.pdf"  // AMEND
                //
                //     codeTabButtonInner[0].textContent = "index.php";
                //
                //     codeTabButtonInner[0].onclick = () => {
                //         document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/index.pdf"
                //
                //     }




                case "MyFirstWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-1"; // AMEND
                    downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMyFirstWebsite.zip"; // AMEND
                    projectReference = "MyFirstWebsite"; // AMEND



                    for (var j=0; j<4; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "https://meetalex.org/0001-My-First-Website/index.html"  // AMEND

                    documentButtonInner[0].textContent = "Preview Website";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="https://meetalex.org/0001-My-First-Website/index.html";

                    }

                    documentButtonInner[1].textContent = "Open Website in Separate Window";

                    documentButtonInner[1].onclick = () => {
                        window.open("https://meetalex.org/0001-My-First-Website/index.html")

                    }

                    documentButtonInner[2].textContent = "Introduction";

                    documentButtonInner[2].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0001_MyFirstWebsite/PreviewDocs/Introduction.pdf";

                    }

                    documentButtonInner[3].textContent = "Document Requirements";

                    documentButtonInner[3].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0001_MyFirstWebsite/PreviewDocs/Requirements.pdf";

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

                    document.getElementById("populateCodeIframe").src="ProjectsData/0001_MyFirstWebsite/PreviewDocs/index.pdf";

                    codeTabButtonInner[0].textContent = "index.php";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0001_MyFirstWebsite/PreviewDocs/index.pdf";

                    }

                    codeTabButtonInner[1].textContent = "facts.html";

                    codeTabButtonInner[1].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0001_MyFirstWebsite/PreviewDocs/facts.pdf";

                    }

                    cardFlip(cardsClassArray[i]);
                    break;


                case "MySecondWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-2"; // AMEND
                    downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMySecondWebsite.zip"; // AMEND
                    projectReference = "MySecondWebsite"; // AMEND



                    for (var j=0; j<4; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "https://www.meetalex.org/0002-My-Second-Website/index.html"  // AMEND

                    documentButtonInner[0].textContent = "View Website";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="https://www.meetalex.org/0002-My-Second-Website/index.html";

                    }

                    documentButtonInner[1].textContent = "Open Website in Separate Window";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/Introduction.pdf";
                        window.open("https://www.meetalex.org/0002-My-Second-Website/index.html")

                    }
                    documentButtonInner[2].textContent = "Introduction";

                    documentButtonInner[2].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/Introduction.pdf";

                    }
                    documentButtonInner[3].textContent = "Requirements";

                    documentButtonInner[3].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/Requirements.pdf";

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


                    document.getElementById("populateCodeIframe").src = "ProjectsData/0002_MySecondWebsite/PreviewDocs/index.pdf"

                    codeTabButtonInner[0].textContent = "index.php";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/index.pdf"

                    }

                    codeTabButtonInner[1].textContent = "about.php";

                    codeTabButtonInner[1].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/about.pdf"

                    }

                    codeTabButtonInner[2].textContent = "bibliography.html";

                    codeTabButtonInner[2].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/bibliography.pdf"

                    }

                    codeTabButtonInner[3].textContent = "index.css";

                    codeTabButtonInner[3].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/index_css.pdf"

                    }

                    codeTabButtonInner[4].textContent = "about.css";

                    codeTabButtonInner[4].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/about_css.pdf"

                    }

                    codeTabButtonInner[5].textContent = "bibliography.css";

                    codeTabButtonInner[5].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0002_MySecondWebsite/PreviewDocs/bibliography_css.pdf"

                    }


                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyThirdWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-3"; // AMEND
                    downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMyThirdWebsite.zip"; // AMEND
                    projectReference = "MyThirdWebsite"; // AMEND



                    for (var j=0; j<4; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "https://www.meetalex.org/0003-My-Third-Website/Index.html"  // AMEND

                        documentButtonInner[0].textContent = "View Website";

                        documentButtonInner[0].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="https://www.meetalex.org/0003-My-Third-Website/Index.html";

                        }
                        documentButtonInner[1].textContent = "Open Website in a Separate Window";

                        documentButtonInner[1].onclick = () => {
                            window.open("https://www.meetalex.org/0003-My-Third-Website/Index.html")

                        }

                        documentButtonInner[2].textContent = "Introduction";

                        documentButtonInner[2].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/introduction.pdf";

                        }

                        documentButtonInner[3].textContent = "Document Requirements";

                        documentButtonInner[3].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/Requiremetns.pdf";

                        }




                    for (var k=0; k<14; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0003_MyThirdWebsite/PreviewDocs/index.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "index.php";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/index.pdf"

                    }

                    codeTabButtonInner[1].textContent = "index.css";

                    codeTabButtonInner[1].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/index_css.pdf"

                    }

                    codeTabButtonInner[2].textContent = "page2.html";

                    codeTabButtonInner[2].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page2.pdf"

                    }

                    codeTabButtonInner[3].textContent = "page2.css";

                    codeTabButtonInner[3].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page2_css.pdf"

                    }

                    codeTabButtonInner[4].textContent = "page3.html";

                    codeTabButtonInner[4].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page3.pdf"

                    }

                    codeTabButtonInner[5].textContent = "page3.css";

                    codeTabButtonInner[5].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page3_css.pdf"

                    }
                    codeTabButtonInner[6].textContent = "page4.html";

                    codeTabButtonInner[6].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page4.pdf"

                    }
                    codeTabButtonInner[7].textContent = "page4.css";

                    codeTabButtonInner[7].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page4_css.pdf"

                    }
                    codeTabButtonInner[8].textContent = "page5.html";

                    codeTabButtonInner[8].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page5.pdf"

                    }
                    codeTabButtonInner[9].textContent = "page5.css";

                    codeTabButtonInner[9].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page5_css.pdf"

                    }
                    codeTabButtonInner[10].textContent = "page6.html";

                    codeTabButtonInner[10].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page6.pdf"

                    }
                    codeTabButtonInner[11].textContent = "page6.css";

                    codeTabButtonInner[11].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page6_css.pdf"

                    }
                    codeTabButtonInner[12].textContent = "page7.html";

                    codeTabButtonInner[12].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page7.pdf"

                    }
                    codeTabButtonInner[13].textContent = "page7.css";

                    codeTabButtonInner[13].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0003_MyThirdWebsite/PreviewDocs/page7_css.pdf"

                    }



                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyForthWebsite":

                        gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-4"; // AMEND
                        downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMyForthWebsite.zip"; // AMEND
                        projectReference = "MyForthWebsite"; // AMEND



                        for (var j=0; j<4; j++) { // AMEND
                            documentButton[j] = document.createElement('div');
                            documentButton[j].setAttribute('class', 'DocumentButton');
                            documentTabsSelector.appendChild(documentButton[j]);

                            documentButtonInner[j] = document.createElement("div");
                            documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                            documentButtonInner[j].textContent = "Placeholder";
                            documentButton[j].appendChild(documentButtonInner[j]);

                        }

                        document.getElementById("populateDocumentsIframe").src = "https://www.meetalex.org/0004-My-Fourth-Website/index.html"  // AMEND

                        documentButtonInner[0].textContent = "View Website";

                        documentButtonInner[0].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="https://www.meetalex.org/0004-My-Fourth-Website/index.html";

                        }

                        documentButtonInner[1].textContent = "Open Website in a Separate Window";

                        documentButtonInner[1].onclick = () => {
                            window.open("https://www.meetalex.org/0004-My-Fourth-Website/index.html");

                        }

                        documentButtonInner[2].textContent = "Introduction";

                        documentButtonInner[2].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0004_MyForthWebsite/PreviewDocs/Introduction.pdf";

                        }

                        documentButtonInner[3].textContent = "Requirements";

                        documentButtonInner[3].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0004_MyForthWebsite/PreviewDocs/Requiremetns.pdf";

                        }



                        for (var k=0; k<3; k++) {
                            codeTabButton[k] = document.createElement('div');
                            codeTabButton[k].setAttribute('class', 'CodeTabButton');
                            codeTabsSelector.appendChild(codeTabButton[k]);

                            codeTabButtonInner[k] = document.createElement("div");
                            codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                            codeTabButtonInner[k].textContent = "Placeholder";
                            codeTabButton[k].appendChild(codeTabButtonInner[k]);

                        }

                        document.getElementById("populateCodeIframe").src = "ProjectsData/0004_MyForthWebsite/PreviewDocs/index.pdf"  // AMEND

                        codeTabButtonInner[0].textContent = "index.php";

                        codeTabButtonInner[0].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0004_MyForthWebsite/PreviewDocs/index.pdf"

                        }

                        codeTabButtonInner[1].textContent = "style.css";

                        codeTabButtonInner[1].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0004_MyForthWebsite/PreviewDocs/style_css.pdf"

                        }

                        codeTabButtonInner[2].textContent = "app.js";

                        codeTabButtonInner[2].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0004_MyForthWebsite/PreviewDocs/app_js.pdf"

                        }

                    cardFlip(cardsClassArray[i]);
                    break;

                case "MyFifthWebsite":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Website-Project-5"; // AMEND
                        downloadCodeOverlayLink.href="Files/HTML_CSS_JS/AleksandarMladenovMyFifthWebsite.zip"; // AMEND
                        projectReference = "MyFifthWebsite"; // AMEND



                        for (var j=0; j<4; j++) { // AMEND
                            documentButton[j] = document.createElement('div');
                            documentButton[j].setAttribute('class', 'DocumentButton');
                            documentTabsSelector.appendChild(documentButton[j]);

                            documentButtonInner[j] = document.createElement("div");
                            documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                            documentButtonInner[j].textContent = "Placeholder";
                            documentButton[j].appendChild(documentButtonInner[j]);

                        }

                        document.getElementById("populateDocumentsIframe").src = "https://www.meetalex.org/0005-My-Fifth-Website/index.html"  // AMEND

                        documentButtonInner[0].textContent = "View Website";

                        documentButtonInner[0].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="https://www.meetalex.org/0005-My-Fifth-Website/index.html";

                        }
                        documentButtonInner[1].textContent = "Open Website in a Separate Window";

                        documentButtonInner[1].onclick = () => {
                            window.open("https://www.meetalex.org/0005-My-Fifth-Website/index.html");

                        }

                        documentButtonInner[2].textContent = "Introduction";
                        documentButtonInner[2].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Introduction.pdf";

                        }

                        documentButtonInner[3].textContent = "Requirements";
                        documentButtonInner[3].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Requirements.pdf";

                        }



                        for (var k=0; k<10; k++) {
                            codeTabButton[k] = document.createElement('div');
                            codeTabButton[k].setAttribute('class', 'CodeTabButton');
                            codeTabsSelector.appendChild(codeTabButton[k]);

                            codeTabButtonInner[k] = document.createElement("div");
                            codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                            codeTabButtonInner[k].textContent = "Placeholder";
                            codeTabButton[k].appendChild(codeTabButtonInner[k]);

                        }

                        document.getElementById("populateCodeIframe").src = "ProjectsData/0005_MyFifthWebsite/PreviewDocs/index_html.pdf"  // AMEND

                        codeTabButtonInner[0].textContent = "Index.html";

                        codeTabButtonInner[0].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/index_html.pdf"

                        }


                        codeTabButtonInner[1].textContent = "Dublin.html";

                        codeTabButtonInner[1].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Dublin_html.pdf"

                        }


                        codeTabButtonInner[2].textContent = "Cork.html";

                        codeTabButtonInner[2].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Cork_html.pdf"

                        }


                        codeTabButtonInner[3].textContent = "Limerick.html";

                        codeTabButtonInner[3].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Limerick_html.pdf"

                        }


                        codeTabButtonInner[4].textContent = "Galway.html";

                        codeTabButtonInner[4].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Galway_html.pdf"

                        }

                        codeTabButtonInner[5].textContent = "Waterford.html";

                        codeTabButtonInner[5].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Waterford_html.pdf"

                        }


                        codeTabButtonInner[6].textContent = "Drogheda.html";

                        codeTabButtonInner[6].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Drogheda_html.pdf"

                        }


                        codeTabButtonInner[7].textContent = "About.html";

                        codeTabButtonInner[7].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/About_html.pdf"

                        }


                        codeTabButtonInner[8].textContent = "Style.css";

                        codeTabButtonInner[8].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/Style.pdf"

                        }


                        codeTabButtonInner[9].textContent = "App.js";

                        codeTabButtonInner[9].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0005_MyFifthWebsite/PreviewDocs/app_js.pdf"

                        }


                    cardFlip(cardsClassArray[i]);
                    break;

                case "JavaLotteryGame":

                        gitHubOverlayLink.href="https://github.com/RickyIE/Java-Lottery-Game"; // AMEND
                        downloadCodeOverlayLink.href="Files/Java/AleksandarMladenovLotteryGame.zip"; // AMEND
                        projectReference = "JavaLotteryGame"; // AMEND



                        for (var j=0; j<2; j++) { // AMEND
                            documentButton[j] = document.createElement('div');
                            documentButton[j].setAttribute('class', 'DocumentButton');
                            documentTabsSelector.appendChild(documentButton[j]);

                            documentButtonInner[j] = document.createElement("div");
                            documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                            documentButtonInner[j].textContent = "Placeholder";
                            documentButton[j].appendChild(documentButtonInner[j]);

                        }

                        document.getElementById("populateDocumentsIframe").src = "ProjectsData/0006_LotteryGame/Documents/introduction.pdf"  // AMEND

                        documentButtonInner[0].textContent = "Introduction";

                        documentButtonInner[0].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0006_LotteryGame/Documents/introduction.pdf";

                        }
                        documentButtonInner[1].textContent = "Requirements";

                        documentButtonInner[1].onclick = () => {
                            document.getElementById("populateDocumentsIframe").src="ProjectsData/0006_LotteryGame/Documents/Assignment1.pdf";

                        }



                        for (var k=0; k<1; k++) {
                            codeTabButton[k] = document.createElement('div');
                            codeTabButton[k].setAttribute('class', 'CodeTabButton');
                            codeTabsSelector.appendChild(codeTabButton[k]);

                            codeTabButtonInner[k] = document.createElement("div");
                            codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                            codeTabButtonInner[k].textContent = "Placeholder";
                            codeTabButton[k].appendChild(codeTabButtonInner[k]);

                        }

                        document.getElementById("populateCodeIframe").src = "ProjectsData/0006_LotteryGame/Code/LotteryGameAlex2.pdf"  // AMEND

                        codeTabButtonInner[0].textContent = "LotteryGameAlex2.java";

                        codeTabButtonInner[0].onclick = () => {
                            document.getElementById("populateCodeIframe").src="ProjectsData/0006_LotteryGame/Code/LotteryGameAlex2.pdf"

                        }

                    cardFlip(cardsClassArray[i]);
                    break;

                case "Java1024/2048Game":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Java-Game-2048"; // AMEND
                    downloadCodeOverlayLink.href="Files/Java/AleksandarMladenov2048Game.zip"; // AMEND
                    projectReference = "Java1024/2048Game"; // AMEND



                    for (var j=0; j<2; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsData/0007_Game1024/Documents/introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0007_Game1024/Documents/introduction.pdf";

                    }
                    documentButtonInner[1].textContent = "Requirements";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0007_Game1024/Documents/Assignment2.pdf";

                    }



                    for (var k=0; k<1; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0007_Game1024/Code/Game1024Alex.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "Game1024Alex.java";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0007_Game1024/Code/Game1024Alex.pdf"

                    }

                    cardFlip(cardsClassArray[i]);
                    break;

                case "JavaGameCeasersCipher":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Java-Cipher-Game"; // AMEND
                    downloadCodeOverlayLink.href="Files/Java/AleksandarMladenovCipherGame.zip"; // AMEND
                    projectReference = "JavaGameCeasersCipher"; // AMEND



                    for (var j=0; j<2; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsData/0008_CeasersCipher/Documents/introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0008_CeasersCipher/Documents/introduction.pdf";

                    }
                    documentButtonInner[1].textContent = "Requirements";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0008_CeasersCipher/Documents/Assignment3.pdf";

                    }



                    for (var k=0; k<1; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0008_CeasersCipher/Code/CipherGame5.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "CipherGame5.java";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0008_CeasersCipher/Code/CipherGame5.pdf"

                    }

                    cardFlip(cardsClassArray[i]);
                    break;
                case "BloodTransfusionManager":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Java-Blood-Transfusion-Manager"; // AMEND
                    downloadCodeOverlayLink.href="Files/Java/AleksandarMladenovBloodTransfusionManager.zip"; // AMEND
                    projectReference = "JavaGameCeasersCipher"; // AMEND



                    for (var j=0; j<2; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsData/0009_BloodTransfusionManager/Documents/introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0009_BloodTransfusionManager/Documents/introduction.pdf";

                    }
                    documentButtonInner[1].textContent = "Requirements";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0009_BloodTransfusionManager/Documents/Assignment4.pdf";

                    }



                    for (var k=0; k<1; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0009_BloodTransfusionManager/Code/BloodTransfusionManager.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "BloodTransfusionManager.java";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0009_BloodTransfusionManager/Code/BloodTransfusionManager.pdf"

                    }

                    cardFlip(cardsClassArray[i]);
                    break;

                case "ProjectMarkingAssistant":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Java-Project-Marking-Assistant"; // AMEND
                    downloadCodeOverlayLink.href="Files/Java/AleksandarMladenovProjectMarkingAssistant.zip"; // AMEND
                    projectReference = "ProjectMarkingAssistant"; // AMEND



                    for (var j=0; j<2; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsData/0010_ProjectMarkingAssistant/Documents/introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0010_ProjectMarkingAssistant/Documents/introduction.pdf";

                    }
                    documentButtonInner[1].textContent = "Requirements";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0010_ProjectMarkingAssistant/Documents/Assignment5.pdf";

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

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0010_ProjectMarkingAssistant/Code/MainClass.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "MainClass.java";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0010_ProjectMarkingAssistant/Code/MainClass.pdf"

                    }

                    codeTabButtonInner[1].textContent = "Project.java";

                    codeTabButtonInner[1].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0010_ProjectMarkingAssistant/Code/Project.pdf"

                    }

                    cardFlip(cardsClassArray[i]);
                    break;

                case "RobocodeProjectCappucino":

                    gitHubOverlayLink.href="https://github.com/RickyIE/Java-Robocode-Cappuccino"; // AMEND
                    downloadCodeOverlayLink.href="Files/Java/JavaRobocodeCappuccino.zip"; // AMEND
                    projectReference = "RobocodeProjectCappucino"; // AMEND



                    for (var j=0; j<2; j++) { // AMEND
                        documentButton[j] = document.createElement('div');
                        documentButton[j].setAttribute('class', 'DocumentButton');
                        documentTabsSelector.appendChild(documentButton[j]);

                        documentButtonInner[j] = document.createElement("div");
                        documentButtonInner[j].setAttribute("class", "DocumentButtonInner");
                        documentButtonInner[j].textContent = "Placeholder";
                        documentButton[j].appendChild(documentButtonInner[j]);

                    }

                    document.getElementById("populateDocumentsIframe").src = "ProjectsData/0011_RobocodeCappuccino/Documents/introduction.pdf"  // AMEND

                    documentButtonInner[0].textContent = "Introduction";

                    documentButtonInner[0].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0011_RobocodeCappuccino/Documents/introduction.pdf";

                    }
                    documentButtonInner[1].textContent = "Design Document";

                    documentButtonInner[1].onclick = () => {
                        document.getElementById("populateDocumentsIframe").src="ProjectsData/0011_RobocodeCappuccino/Documents/DesignDocument.pdf";

                    }



                    for (var k=0; k<1; k++) {
                        codeTabButton[k] = document.createElement('div');
                        codeTabButton[k].setAttribute('class', 'CodeTabButton');
                        codeTabsSelector.appendChild(codeTabButton[k]);

                        codeTabButtonInner[k] = document.createElement("div");
                        codeTabButtonInner[k].setAttribute("class", "CodeTabButtonInner");
                        codeTabButtonInner[k].textContent = "Placeholder";
                        codeTabButton[k].appendChild(codeTabButtonInner[k]);

                    }

                    document.getElementById("populateCodeIframe").src = "ProjectsData/0011_RobocodeCappuccino/Code/Cappuccino.pdf"  // AMEND

                    codeTabButtonInner[0].textContent = "Cappuccino.java";

                    codeTabButtonInner[0].onclick = () => {
                        document.getElementById("populateCodeIframe").src="ProjectsData/0011_RobocodeCappuccino/Code/Cappuccino.pdf"

                    }


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


documentButtonInnerChecked = () => {

}




styleArray();
