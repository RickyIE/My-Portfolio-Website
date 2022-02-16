<!DOCTYPE html>
<html lang="en">
<head>
    <title>About Me</title> <!-- Page title  -->
    <meta charset="UTF-8">
    <meta http-equiv = "X-UA-Compatible" content= "ie=edge"/>
    <meta name="viewport" content="width=device-width, initial - scale=1.0"> <!-- Meta tag to scale for mobile devices setting the scale to 1 to avoid elements appearing to small   -->
    <link href="CSS/all.css" rel="stylesheet" > <!-- CSS reference for font awesome  -->
    <link href="CSS/style.css" rel="stylesheet" > <!-- CSS reference  -->
    <script src="https://kit.fontawesome.com/42bf2414a5.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="AboutWrapper" class="Wrapper">
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
    <section class="MyNoteAboutMe">
        <div class="NoteContainer">
            <div class="Note"><p>I am not one to talk much about myself, but I will make an effort here. I always liked technology and computers so after some time I decided to take the plunge. Signing up for a degree in Computer Science was just as much about getting to know myself as it is to learn about technology. A few month ago, I had never programmed in my life. And now less than one year later I made all that you see on this website (including the site) with my own two hands. Impressive or not it is an achievement looking back. I have the dedication and persistence and I hope in another 12 months my progress would be just as good if not better. </p></div>
        </div>
    </section>
    <section class="MyCV">
        <div class="MyCVContainer">
            <iframe class="CV" src="Documents/AleksandarMladenovCV.pdf"></iframe>
        </div>
    </section>
    <section class="Education">
        <div class="EducationBanner"><p>BSCH Computing Science Progress</p></div>
        <div class="EducationBanner"><p>First Academic Year ( PPA 78 First Class Honours )</p></div>
        <div class="AcademicYear">
            <div class="LeftPanelAcademicYear"></div>
            <div class="MiddlePanelAcademicYear">
                <div class="MiddlePanelAcademicYearTopRay"></div>
                <div class="MiddlePanelAcademicYearMiddlePanel">
                    <p class="AcademicYearText" >First Semester</p>
                    <ul>
                        <li>Effective Learning and Development</li>
                        <li>Systems Analysis and Design 1</li>
                        <li>Client Side Web Development</li>
                    </ul>
                    <p>Second Semester</p>
                    <ul>
                        <li>Foundations of Computing - span 2 semesters</li>
                        <li>Computer Hardware - span 2 semesters</li>
                        <li>Computer Programming - span 2 semesters</li>
                        <li>Software Development 1</li>
                        <li>Operating System Design</li>
                    </ul>
                </div>
                <div class="MiddlePanelAcademicYearBottomRay"></div>
            </div>
            <div class="RightPanelAcademicYear">
                <button class="AcademicPanelButton"><p>OPEN</p></button>
            </div>
        </div>

        <div class="EducationBanner"><p>Second Academic Year ( PPA 77 First Class Honours )</p></div>
        <div class="AcademicYear">
            <div class="LeftPanelAcademicYear"></div>
            <div class="MiddlePanelAcademicYear">
                <div class="MiddlePanelAcademicYearTopRay"></div>
                <div class="MiddlePanelAcademicYearMiddlePanel">
                    <p class="AcademicYearText" >First Semester</p>
                    <ul>
                        <li>Effective Learning and Development</li>
                        <li>Systems Analysis and Design 1</li>
                        <li>Client Side Web Development</li>
                    </ul>
                    <p>Second Semester</p>
                    <ul>
                        <li>Foundations of Computing - span 2 semesters</li>
                        <li>Computer Hardware - span 2 semesters</li>
                        <li>Computer Programming - span 2 semesters</li>
                        <li>Software Development 1</li>
                        <li>Operating System Design</li>
                    </ul>
                </div>
                <div class="MiddlePanelAcademicYearBottomRay"></div>
            </div>
            <div class="RightPanelAcademicYear">
                <button class="AcademicPanelButton"><p>OPEN</p></button>
            </div>
        </div>

        <!--        <div class="EducationBanner"><p>Second Academic Year</p></div>-->
        <!--        <div class="AcademicYear">-->
        <!--            <div class="LeftPanelAcademicYear"></div>-->
        <!--            <div class="MiddlePanelAcademicYear">-->
        <!--                <div class="MiddlePanelAcademicYearTopRay"></div>-->
        <!--                <div class="MiddlePanelAcademicYearMiddlePanel">-->
        <!--                    <p>First Semester</p>-->
        <!--                    <ul>-->
        <!--                        <li>Module 1</li>-->
        <!--                        <li>Module 2</li>-->
        <!--                        <li>Module 3</li>-->
        <!--                        <li>module 4</li>-->
        <!--                    </ul>-->
        <!--                    <p>First Semester</p>-->
        <!--                    <ul>-->
        <!--                        <li>Module 1</li>-->
        <!--                        <li>Module 2</li>-->
        <!--                        <li>Module 3</li>-->
        <!--                        <li>module 4</li>-->
        <!--                    </ul>-->
        <!--                </div>-->
        <!--                <div class="MiddlePanelAcademicYearBottomRay"></div>-->
        <!--            </div>-->
        <!--            <div class="RightPanelAcademicYear"></div>-->
        <!--        </div>-->
    </section>
    <?php include 'footer.html' ?>
</div>
<script src="js/app.js"></script> <!-- Script file  -->
<script src="js/cardFlip.js"></script>
<script src="js/MenuFunctions.js"></script>
<script src="js/AcademicPanels.js"></script>
</body>
</html>