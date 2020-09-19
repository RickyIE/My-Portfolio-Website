


let text;

document.onkeypress = function (e){

    if (e.keyCode === 13) {
        text = loadStrings ("DesignDocument.txt")
        console.log(text);

    }
}







function preload () {

}

preload;