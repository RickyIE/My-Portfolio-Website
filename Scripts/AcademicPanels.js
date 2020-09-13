

const academicPanelButton = document.querySelector(".AcademicPanelButton") .addEventListener('click', openPanel);
const MiddlePanelAcademicYear = document.querySelector(".MiddlePanelAcademicYear");

let panelIsOpen = false;

function openPanel () {
    // alert(panelIsOpen)

    if (panelIsOpen === true) {
        MiddlePanelAcademicYear.style.width = "0%";
        panelIsOpen = false;
    } else if (panelIsOpen === false) {
        MiddlePanelAcademicYear.style.width = "60%";
        panelIsOpen = true;
    }
}