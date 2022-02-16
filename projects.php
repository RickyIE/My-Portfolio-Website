<?php
    require "scripts/ConnectToMainDatabase.php";

$query = 'SELECT * FROM cardInfo;';

$result = mysqli_query($db_connection, $query);

$dataArray = array();


if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        $dataArray[] = (array(
            'projectName' => $row['projectName'],
            'cardPlaque' =>$row['cardPlaque'],
            'cardTextMiddle' => $row['cardTextMiddle'],
            'projectDownloadLink' =>$row['projectDownloadLink'],
            'cardPicturePath' => $row['cardPicturePath'],
            'showProject' =>$row['showProject']
        ));
    }

} else {
    echo "0 results";
}
for ($i = 0 ; $i<count($dataArray); $i++){

    //echo '<h1 style="color: white;background-color: chartreuse;font-size: 3rem">'.$dataArray[$i]['cardPicturePath'].'</h1>';
    //'.str_replace(' ' , '-', $dataArray[$i]['projectName']).'

}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Projects</title> <!-- Page title  -->
    <meta charset="UTF-8">
    <meta http-equiv = "X-UA-Compatible" content= "ie=edge"/>
    <meta name="viewport" content="width=device-width, initial - scale=1.0"> <!-- Meta tag to scale for mobile devices setting the scale to 1 to avoid elements appearing to small   -->
    <link href="CSS/all.css" rel="stylesheet" > <!-- CSS reference for font awesome  -->
    <link href="CSS/style.css" rel="stylesheet" > <!-- CSS reference  -->
    <script src="https://kit.fontawesome.com/42bf2414a5.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="ProjectsWrapper" class="Wrapper">
    <section class="NavBar">
        <div class="NavBarTop"></div>
        <ul class="MenuList">
            <a href="index.php"><li>Main</li></a>
            <a href="projects.php"><li>Portfolio Projects</li></a>
            <a href="about.php"><li>About Me (CV)</li></a>
            <div class="MenuListBackground"></div>
            <div class="MenuListBackgroundColor"></div>
        </ul>
        <button class="MenuButton"><p>MENU</p></button>
        <div class="NavBarBottom"></div>
    </section>
    <section class="ProgramingLanguagesPanel" id="Anchor1">

        <div class="LanguageName"><p>HTML/CSS/JS - all requirement documents uploaded along with code</p></div>


        <?php

        for ($i = 0 ; $i<count($dataArray); $i++) {

            $counter = $i+1;
            $cardTextID = "card-text-id-";
            $testTest = 'Hello World';

            echo '
            
        <div class="Card" id='.str_replace(' ' , '-', $dataArray[$i]['projectName']).'>
            <div class="CardImage" id="card-image-id-'.$counter.'">
            
            <style>
            
            #card-image-id-'.$counter.' {
            background: url('.$dataArray[$i]['cardPicturePath'].') left, center no-repeat;
            background-size: cover;
            }
            
            </style>          
                <div class="CardPlaque">'.$dataArray[$i]['cardPlaque'].'</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="'.$cardTextID.$counter.'">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">'.$dataArray[$i]['cardTextMiddle'].'</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="card-base-id-'.$counter.'">
                <div class="CardLeftButton" id="plaque-id-1" onclick="function foo(){
                    
                     var test = '.json_encode($testTest).';
                    console.log(test);
                    
                };changeCardPlaque1()">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyFirstWebsite.zip">
                    <div class="CardRightButton">
                    <p>Download</p>
                </div></a>
            </div>
        </div>
        
        <script type="text/javascript">
        
        function changeCardPlaque(){
        //const cardList = document.getElementById(e); // card class
        
        var hello = '.json_encode($cardTextID.$counter).';
        
        console.log(hello);
        
        }
</script>
            
            ';

        }

        ?>

        <div class="Card" id="MyFirstWebsite">
            <div class="CardImage" id="Panel1CardImage1">
                <div class="CardPlaque">Personal profile page</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel1CardText1">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">My First Website had to follow strict requirements only in html.A bit improved since then.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel1CardButton1">
                <div class="CardLeftButton" id="Plaque0">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyFirstWebsite.zip">
                    <div class="CardRightButton">
                    <p>Download</p>
                </div></a>
            </div>
        </div>

        <div class="Card" id="MySecondWebsite">
            <div class="CardImage" id="Panel1CardImage2">
                <div class="CardPlaque">Web report:Quantum computing</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel1CardText2">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">My Second website taught me how to use CSS and make the website pretty.This made me fall in love with Website building.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel1CardButton2">
                <div class="CardLeftButton" id="Plaque1">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMySecondWebsite.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="MyThirdWebsite">
            <div class="CardImage" id="Panel1CardImage3">
                <div class="CardPlaque">My Personal Hero</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel1CardText3">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">My Third Website was inspired by a historic figure. It gave me a chance to go deeper into CSS. Its not responsive and it maybe a little buggy but I became a card expert! Big Change for a few months time as this site was wrapping up 2019</div>
                <div class="CardTextBottom"></div>
            </div>
        <div class="CardBase" id="Panel1CardButton3">
                <div class="CardLeftButton" id="Plaque2">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyThirdWebsite.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="MyForthWebsite">
            <div class="CardImage" id="Panel1CardImage4">
                <div class="CardPlaque">Quiz</div>
                <div class="CardPlaqueMasque"></div>
            </div>
        <div class="CardText" id="Panel1CardText4">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle"> The forth website that I build was an introduction to JavaScript. When I first heard of Java and JavaScript, I did not even know what the difference is. I am not sure I do now but hey with every build it becomes clearer. This introduced JavaScript into the equation. The Idea was to build a quiz which could be as simple or complicated as possible.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel1CardButton4">
                <div class="CardLeftButton" id="Plaque3">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyForthWebsite.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="MyFifthWebsite">
            <div class="CardImage" id="Panel1CardImage5">
                <div class="CardPlaque">Personal profile page</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel1CardText5">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">The fifth website was a group project. The idea was to work together and combine business with pleasure. We Decided to create a pub crawlers guide to Dublin. But then we scaled down the score but expanded the scale to include more places on the lovely island of Ireland!</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel1CardButton5">
                <div class="CardLeftButton" id="Plaque4">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyFifthWebsite.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

<!--        <div class="Card" id="PortfolioWebsiteProffesional">-->
<!--            <div class="CardImage" id="Panel1CardImage6">-->
<!--                <div class="CardPlaque">Portfolio Website V.1</div>-->
<!--                <div class="CardPlaqueMasque"></div>-->
<!--            </div>-->
<!--            <div class="CardText" id="Panel1CardText6">-->
<!--                <div class="CardTextTop"></div>-->
<!--                <div class="CardTextMiddle">The final work in progress version of my portfolio website. This version is concentrated on mobile friendly design and speedy web browsing. In the future i hope to implement a 2D and 3D game mode version of the website </div>-->
<!--                <div class="CardTextBottom"></div>-->
<!--            </div>-->
<!--            <div class="CardBase" id="Panel1CardButton6">-->
<!--                <div class="CardLeftButton" id="Plaque10">-->
<!--                    <p>Statistics</p>-->
<!--                </div>-->
<!--                <div class="CardButtonOpenCode">-->
<!--                    <p>VIEW CODE</p>-->
<!--                </div>-->
<!--                <a href="Files/HTML_CSS_JS/AleksandarMladenovMyFifthWebsite.zip">-->
<!--                    <div class="CardRightButton">-->
<!--                        <p>Download</p>-->
<!--                    </div></a>-->
<!--            </div>-->
<!--        </div>-->


    </section>
    <section class="ProgramingLanguagesPanel2" id="Anchor2">


        <div class="LanguageName2"><p>JAVA - all requirement documents uploaded along with code</p></div>

        <div class="Card" id="JavaLotteryGame">
            <div class="CardImage" id="Panel2CardImage1">
                <div class="CardPlaque">Lottery Game</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText1">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">Lottery Game - The first time i ever programed in my life.I had to build a lottery game with multiple prizes and exact calculation according to strict standards.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton1">
                <div class="CardLeftButton" id="Plaque5">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/AleksandarMladenovLotteryGame.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>


        <div class="Card" id="Java1024/2048Game">
            <div class="CardImage" id="Panel2CardImage2">
                <div class="CardPlaque">Game 1024/2048</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText2">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">1024/2048 Game - For my second assignment we had to build a clone of the famous game. However it was strictly modified in the console.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton2">
                <div class="CardLeftButton" id="Plaque6">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/AleksandarMladenov2048Game.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="JavaGameCeasersCipher">
            <div class="CardImage" id="Panel2CardImage3">
                <div class="CardPlaque">Ceasers Cipher</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText3">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">Ceasers Cipher - Or rather a very complicated version of it. At times i felt we were building an enigma machine .</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton3">
                <div class="CardLeftButton" id="Plaque7">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/AleksandarMladenovCipherGame.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="BloodTransfusionManager">
            <div class="CardImage" id="Panel2CardImage4">
                <div class="CardPlaque">Blood Transfusion Manager</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText4">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">Blood Transfusion Manager - every donor and recipient need to be matched efficiently and booked with an appointment system.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton4">
                <div class="CardLeftButton" id="Plaque8">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/AleksandarMladenovBloodTransfusionManager.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="ProjectMarkingAssistant">
            <div class="CardImage" id="Panel2CardImage5">
                <div class="CardPlaque">Project Marking Assistant</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText5">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">Project Marking System - A simple but robust student grade tracking system.</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton5">
                <div class="CardLeftButton" id="Plaque9">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/AleksandarMladenovProjectMarkingAssistant.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

        <div class="Card" id="RobocodeProjectCappucino">
            <div class="CardImage" id="Panel2CardImage6">
                <div class="CardPlaque">Robocode: Cappuccino</div>
                <div class="CardPlaqueMasque"></div>
            </div>
            <div class="CardText" id="Panel2CardText6">
                <div class="CardTextTop"></div>
                <div class="CardTextMiddle">Robocode - Presenting the most advanced robot ever. Dont let the cute name fool you. We pulled our code back and purposely introduced bugs to make sure it doesnt become too powerful. And take over the world. Working in collaboration using GitLab and Zoom. The name courtesy of our italian star programmer</div>
                <div class="CardTextBottom"></div>
            </div>
            <div class="CardBase" id="Panel2CardButton6">
                <div class="CardLeftButton" id="Plaque11">
                    <p>Statistics</p>
                </div>
                <div class="CardButtonOpenCode">
                    <p>VIEW CODE</p>
                </div>
                <a href="Files/Java/JavaRobocodeCappuccino.zip">
                    <div class="CardRightButton">
                        <p>Download</p>
                    </div></a>
            </div>
        </div>

    </section>
    <?php include 'footer.html' ?>
</div>
<section class="OverLay">
    <div class="HaloIconSection">
        <div class="HaloIconSectionMiddleOuter">
            <div class="HaloIcon"></div>
            <div class="HaloButtons">
                <div class="HaloButton" id="HalloButtonClose"><p>CLOSE</p></div>
                <a href="" target="_blank" id="ViewFullCodeLink"><div class="HaloButton" id="ViewFullCode"><p>Full code GitHub</p></div></a>
                <a href="" id="HalloButtonDownloadCodeLink"><div class="HaloButton" id="HalloButtonDownloadCode"><p>Download Code</p></div></a>
            </div>
        </div>
    </div>
    <div class="OverlayBody">
        <div class="BodyWrapper">
            <div class="RequirementsSection">
                <div class="DocumentTabs">
<!--                    <div class="DocumentButton">-->
<!--                        <div class="DocumentButtonInner">Lorem ipsum dolor sit amet</div>-->
<!--                    </div>-->
                </div>
                <div class="DocumentOutputWindow">
                    <iframe class="outputDocuments" id="populateDocumentsIframe" src=""></iframe>
                </div>
            </div>
            <div class="CodeSection">
                <div class="CodeTabs">
                </div>
                <div class="CodeOutputWindow">
                    <iframe class="outputCode" id="populateCodeIframe" src=""></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="js/app.js"></script> <!-- Script file  -->
<script src="js/cardFlip.js"></script>
<script src="js/MenuFunctions.js"></script>
<script src="js/TestJava.js"></script>
<script src="js/CardPlaque.js"></script>
</body>
</html>