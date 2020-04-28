AFRAME.registerComponent('prox', {
    schema: {
        message: {type: 'string', default: 'Check out my project!'},
        dist: {type: 'number', default: 1}
    },

    init: function() {
        this.cam = document.querySelector('a-camera');
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
        href: {type: 'string', default: '/'},
    },

    init: function() {
        this.cam = document.querySelector('a-camera');
        this.inProx = false;
        console.log('test');
        this.el.addEventListener('click', function(e) {
            console.log('test');
        })
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

