


const button = document.querySelector(".MenuButton").addEventListener('click', navBarControl);
const menuList = document.querySelector(".MenuList");
menuList.style.display = 'none';


function navBarControl () {

    if (menuList.style.display === 'none'){
        menuList.style.display = 'grid';
    } else {
        menuList.style.display = 'none';
    }



}