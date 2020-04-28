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
        this.pointer = document.getElementById('click');
        this.onClick = function(e) {
            let camPos = this.cam.object3D.position;
            let elPos = this.el.object3D.position;
            if (elPos.distanceTo(camPos) < this.data.dist) {
                window.location.href = this.data.href;
            }
        };

        this.onMouseEnter = function(e) {
            let camPos = this.cam.object3D.position;
            let elPos = this.el.object3D.position;
            if (elPos.distanceTo(camPos) < this.data.dist) {
                this.pointer.object3D.visible = true;
            }
        }
        this.onMouseLeave = function(e) {
            this.pointer.object3D.visible = false;
        }

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.el.addEventListener('click', this.onClick);
        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
    }
});

