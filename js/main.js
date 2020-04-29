var scene = document.querySelector('a-scene');
var bgMusic = document.querySelector('audio');
var enterButton = document.getElementById('enter');
var splash = document.getElementById('splash');
var isLoaded = false;
var numLocks = -1;

scene.addEventListener('loaded', function (e) {
    isLoaded = true;
    enterButton.classList.add('Exhibit__link--ready');
    enterButton.innerText = 'ENTER';
})

enterButton.onclick = function(e) {
    if (isLoaded) {
        bgMusic.play();
        splash.style.visibility = 'hidden';    
    }
}

pointerLockChange = function(e) {
    numLocks += 1;
}

onClick = function(e) {
    if (numLocks == 0) {
        window.open(e.detail.href, '_blank');
    } else {
        numLocks = 0;
    }
}

document.addEventListener('pointerlockchange', pointerLockChange);
document.addEventListener('clicklink', onClick);