
<!--   -->

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Meet Alex</title> <!-- Page title  -->
    <meta charset="UTF-8">
    <meta http-equiv = "X-UA-Compatible" content= "ie=edge"/>
    <meta name="viewport" content="width=device-width, initial - scale=1.0"> <!-- Meta tag to scale for mobile devices setting the scale to 1 to avoid elements appearing to small   -->
    <link href="CSS/all.css" rel="stylesheet" > <!-- CSS reference for font awesome  -->
    <link href="CSS/style.css" rel="stylesheet" > <!-- CSS reference  -->
    <script src="https://kit.fontawesome.com/42bf2414a5.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="indexWrapper" class="Wrapper">
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
    <section id="SlideShow">
        <div id="Container">
            <div id="Slides">
            <div id="Slide1" class="Slide">
                <div class="Slide1Div1"></div>
                <div class="Slide1Div2"><p>
                    <span class="PurpleText">package</span> Career;<br>
                    <span class="PurpleText">public class</span> takeMe {<br>
                    <span class="PurpleText">public static void</span> main(String[] args) {<br><br>
                    System.<span class="BlueText">out.</span>println(
                    <span class="BlueText">"Hey, there dont mind the picture im quite friendly. Aspiring developer here that loves feedback so feel free to get in contact.
                    I made this site to browse code more conveniently so i hope you enjoy the trip!"</span> );<br><br>
                        }<br>

                        }
                    </p></div>
            </div>
            <div id="Slide2" class="Slide">page 2</div>
            <div id="Slide3" class="Slide">page 3</div>
            <div id="Slide4" class="Slide">page 4</div>
            <div id="MobileButtons">
                <div id="LeftButton"><p>Previous</p></div>
                <div id="RightButton"><p>Next</p></div>
            </div>
            <div id="PageCounter" ></div>
            </div>
        </div>
    </section>
    <section id="LanguagePanel">
        <div id="LanguagePanelContainer"><p>Projects by Language or Platform</p></div>
    </section>
    <section id="LanguageButtons">
            <a href="projects.php"> <div class="LanguageButton" id="LanguageButton1">
                <div class="LanguageButtonInner" id="LanguageButtonInner1"></div>
            </div></a>
        <a href="projects.php"> <div class="LanguageButton" id="LanguageButton2">
            <div class ="LanguageButtonInner"  id="LanguageButtonInner2"></div>
        </div></a>
        <a href="projects.php"> <div class="LanguageButton" id="LanguageButton3">
            <div class ="LanguageButtonInner" id="LanguageButtonInner3" ></div>
        </div></a>
       <a href="projects.php#Anchor"> <div class="LanguageButton" id="LanguageButton4">
            <div class ="LanguageButtonInner" id="LanguageButtonInner4"></div>
        </div></a>
    </section>
    <?php include 'footer.html' ?>
</div>
<script src="js/app.js"></script> <!-- Script file  -->
<script src="js/MenuFunctions.js"></script>
<script src="js/Carousel.js"></script>
</body>
</html>