var leftElems = document.getElementsByClassName('Project__wrapper__left');
var rightElems = document.getElementsByClassName('Project__wrapper__right');
// var bodyTop = document.body.getBoundingClientRect().top;

console.log(leftElems);

function onScroll(e) {
    var curScroll = window.scrollY + window.innerHeight;
    console.log(curScroll);
    for (var i = 0; i < leftElems.length; i++) {
        console.log(leftElems[i].getBoundingClientRect().top)
        if (curScroll > leftElems[i].getBoundingClientRect().top && leftElems[i].classList.length == 1) {
            console.log('enter');
            leftElems[i].classList.add('loaded');
        } 
    }
};

document.addEventListener('scroll', onScroll);

onScroll();