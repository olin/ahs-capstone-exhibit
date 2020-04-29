var scene = document.querySelector('a-scene');
var bgMusic = document.querySelector('audio');
var enterButton = document.getElementById('enter');
var splash = document.getElementById('splash');
var isLoaded = false;

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

