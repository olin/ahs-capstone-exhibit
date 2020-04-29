AFRAME.registerComponent('prox', {
    schema: {
        message: {type: 'string', default: 'Check out my project!'},
        dist: {type: 'number', default: 1}
    },

    init: function() {
        this.cam = document.querySelector('#rig');
        this.inProx = false;
    },

    tick: function(t, dt) {
        let camPos = this.cam.object3D.position;
        let elPos = this.el.object3D.position;
        let dist = elPos.distanceTo(camPos);
        if (dist < this.data.dist) {
            if (!this.inProx) {
                this.inProx = true;
                this.el.setAttribute('text', {value: this.data.message});  
            }
        } else if (this.inProx) {
            this.inProx = false;
            this.el.setAttribute('text', {value: ''});
        }
    }
});

AFRAME.registerComponent('proxlink', {
    schema: {
        dist: {type: 'number', default: 2},
        href: {type: 'string', default: '/'}
    },

    init: function() {
        this.cam = document.querySelector('#rig');
        this.onClick = function(e) {
            let camPos = this.cam.object3D.position;
            let elPos = this.el.object3D.position;
            if (elPos.distanceTo(camPos) < this.data.dist) {
                window.location.href = this.data.href;
            }
        };

        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
    }
});

AFRAME.registerComponent('hover', {
    dependencies: ['raycaster'],
  
    init: function () {
        this.numIntersect = 0;
        this.pointer = document.getElementById('click');
        this.onIntersect = function(e) { 
            this.numIntersect += 1;
            this.pointer.object3D.visible = true;
            console.log(this.numIntersect);
        }
        this.onIntersectLeave = function(e) {
            this.numIntersect -= 1;
            if (this.numIntersect < 1) {
                this.numIntersect = 0;
                this.pointer.object3D.visible = false;
            }
        }

        this.onIntersect = this.onIntersect.bind(this);
        this.onIntersectLeave = this.onIntersectLeave.bind(this);

        this.el.addEventListener('raycaster-intersection', this.onIntersect);
        this.el.addEventListener('raycaster-intersection-cleared', this.onIntersectLeave);

    }
  });

