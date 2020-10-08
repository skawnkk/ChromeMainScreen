const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(randomNumber){
    const image = new Image();
    image.src=`imgs/${randomNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const randomNumber = Math.floor(Math.random()*IMG_NUMBER);
    paintImage(randomNumber);

}

init();