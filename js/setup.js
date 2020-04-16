AFRAME.registerComponent('prox', {
    schema: {
        message: {type: 'string', default: 'Hello, World!'},
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
            console.log('leave');
            this.el.setAttribute('text', {value: ''});
        }
    }
});