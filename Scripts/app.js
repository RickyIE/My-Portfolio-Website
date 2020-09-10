

// -----------------------Index Code -----------------------------//




const footerSection2ON = document.querySelector(".FooterSection2");
footerSection2ON.addEventListener('mouseover', footerSection2AnimationON);
const footerSection2OFF = document.querySelector(".FooterSection2");
footerSection2OFF.addEventListener('mouseout', footerSection2AnimationOff);



let pageTracker=1;
let currentPage = document.getElementById("Slide");




button.addEventListener('mouseover', navBarLightsOn);
button.addEventListener('mouseout', navBarLightsOff);




function navBarLightsOn () {

    document.querySelector(".NavBarBottom").style.boxShadow ='5px 5px 10px lightcyan';
    document.querySelector(".NavBarTop").style.boxShadow ='5px 5px 100px 10px lightcyan';

}

function navBarLightsOff () {


    document.querySelector(".NavBarBottom").style.boxShadow ='none';
    document.querySelector(".NavBarTop").style.boxShadow ='none';

}

let leftButton = document.getElementById("LeftButton").addEventListener('click', carouselMovementBackward);;
let rightButton = document.getElementById("RightButton").addEventListener('click', carouselMovementForward);;
let count=1;


function carouselMovementForward () {
    alert("Coming Soon to a screen near you !")
    // currentPage.style.right = '500px';
    // pageTracker++;
    // currentPage = document.getElementById("Slide"+pageTracker);
    // if (pageTracker === 4) {
    //     pageTracker = 1;
    //     currentPage = document.getElementById("Slide"+pageTracker);
    //
    // }

}


function carouselMovementBackward () {
    alert("Coming Soon to a screen near you !")
    // alert(pageTracker);
    // alert(currentPage.innerText);

}

function footerSection2AnimationON () {

    document.querySelector(".SocialContentLoadBarTop").style.width = "100%";
    document.querySelector(".SocialContentLoadBarBottom").style.width = "100%";
    document.querySelector(".SocialContentLoadBarTop").style.boxShadow = "0px 0px 5px 2px dodgerblue";
    document.querySelector(".SocialContentLoadBarBottom").style.boxShadow = "0px 0px 5px 2px dodgerblue";
    document.querySelector(".FooterSection1").style.filter = "blur(2px)";
    document.querySelector(".FooterSection3").style.filter = "blur(2px)";

    if (screen.width > 768) {
        document.querySelector(".FooterSection2").style.transform = "Scale(1.200)";
    }

}


function footerSection2AnimationOff () {

    document.querySelector(".SocialContentLoadBarTop").style.width = "0%";
    document.querySelector(".SocialContentLoadBarBottom").style.width = "0%";
    document.querySelector(".SocialContentLoadBarTop").style.boxShadow = "0px 0px 0px 0px dodgerblue";
    document.querySelector(".SocialContentLoadBarBottom").style.boxShadow = "0px 0px 0px 0px dodgerblue";
    document.querySelector(".FooterSection1").style.filter = "none";
    document.querySelector(".FooterSection3").style.filter = "none";
    document.querySelector(".FooterSection2").style.transform = "Scale(1.000)";
}



