
let search = document.getElementById("searchicon");
let searchinput = document.getElementById("searchinput");
var display = 1;
function hideandshowSearch(){
    if(display == 1){
        searchinput.style.display = 'inline';
        display = 0;
    }
    else{
        searchinput.style.display = 'none';
        display = 1;
    }
}
let menu = document.getElementById("menu");
var display2 = 1;
function hideandshowMenu(){
    if(display2 == 1){
        menu.style.display = 'inline';
        display2 = 0;
    }
    else{
        menu.style.display = 'none';
        display2 = 1;
    }
}




let moreinfoContainer1 = document.getElementById("moreinfoContainer1");
let displayinfo1 = 1;

function showmoreinfo1(){
    if(displayinfo1 === 1){
        moreinfoContainer1.style.display = 'flex';
        displayinfo1 = 0;
    } else {
        moreinfoContainer1.style.display = 'none';
        displayinfo1 = 1;
    }
}

let moreinfoContainer2 = document.getElementById("moreinfoContainer2");
let displayinfo2 = 1;

function showmoreinfo2(){
    if(displayinfo2 === 1){
        moreinfoContainer2.style.display = 'flex';
        displayinfo2 = 0;
    } else {
        moreinfoContainer2.style.display = 'none';
        displayinfo2 = 1;
    }
}

let moreinfoContainer3 = document.getElementById("moreinfoContainer3");
let displayinfo3 = 1;

function showmoreinfo3(){
    if(displayinfo3 === 1){
        moreinfoContainer3.style.display = 'flex';
        displayinfo3 = 0;
    } else {
        moreinfoContainer3.style.display = 'none';
        displayinfo3 = 1;
    }
}

let moreinfoContainer4 = document.getElementById("moreinfoContainer4");
let displayinfo4 = 1;

function showmoreinfo4(){
    if(displayinfo4 === 1){
        moreinfoContainer4.style.display = 'flex';
        displayinfo4 = 0;
    } else {
        moreinfoContainer4.style.display = 'none';
        displayinfo4 = 1;
    }
}

function toggleAfter(currentElem) {
    let isActive = currentElem.classList.contains('show-after');

    // Clear all
    document.querySelectorAll('.icecreamContainer').forEach(container => {
        container.classList.remove('show-after');
    });

    // Only add if it wasn’t already active
    if (!isActive) {
        currentElem.classList.add('show-after');
    }
}