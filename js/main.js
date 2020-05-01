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

// modifiers for aframe-copresence
function buildVisitorRepr(id, el) {
    var headEl = document.createElement('a-entity');
    // in a-frame.html emojis are loaded as emoji_{0..6} (inclusive)
    const choice = Math.floor(Math.random() * 7);
    headEl.setAttribute('gltf-model', '#emoji_' + choice);
    el.appendChild(headEl);
}

// // Add a fake user for debugging
// window.addEventListener('load', () => {
//     let el = createVisitorRepr('debug');
//     el.setAttribute('position', {x: 0, y: 1.6, z: 0});
//     console.log('Added debug visitor ', el);
// });