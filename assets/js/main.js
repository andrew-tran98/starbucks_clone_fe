function changeImg(img){
    document.querySelector('.main-img').src = img;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function myFunction(){
    var x = document.querySelector('#list');
    if (x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block"
    }
}