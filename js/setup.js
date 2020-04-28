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
        if (elPos.distanceTo(camPos) < this.data.dist) {
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
        dist: {type: 'number', default: 10},
        href: {type: 'string', default: '/'}
    },

    init: function() {
        this.cam = document.querySelector('a-camera');
        this.inProx = false;
        this.onClick = function(e) {
            if (this.inProx) {
                window.location.href = this.data.href;
            }
        };
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
    },

    tick: function(t, dt) {
        let camPos = this.cam.object3D.position;
        let elPos = this.el.object3D.position;
        if (elPos.distanceTo(camPos) < this.data.dist) {
            if (!this.inProx) {
                this.inProx = true;
            }
        } else if (this.inProx) {
            this.inProx = false;
        }
    }
});

