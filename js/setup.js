AFRAME.registerComponent('proxtext', {
    init: function() {
        this.cam = document.querySelector('#rig');
        this.inProx = false;
        this.textId = 'link-text-' + this.el.id.split('-')[2];
        this.textElem = document.getElementById(this.textId);

        this.intersected = function(e) {
            this.textElem.object3D.visible = true;
        }
        this.intersectedLeave = function(e) {
            this.textElem.object3D.visible = false;
        }

        this.intersected = this.intersected.bind(this);
        this.intersectedLeave = this.intersectedLeave.bind(this);
        this.el.addEventListener('raycaster-intersected', this.intersected);
        this.el.addEventListener('raycaster-intersected-cleared', this.intersectedLeave);
    },

});

AFRAME.registerComponent('clicklink', {
    schema: {
        href: {type: 'string', default: '/'}
    },

    init: function() {
        this.onClick = function(e) {
            this.el.emit('clicklink', {href: this.data.href}, true);
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
            this.el.emit('textvisible', {}, false);
        }
        this.onIntersectLeave = function(e) {
            this.numIntersect -= 1;
            if (this.numIntersect < 1) {
                this.numIntersect = 0;
                this.pointer.object3D.visible = false;
            }
            this.el.emit('textinvisible');
        }

        this.onIntersect = this.onIntersect.bind(this);
        this.onIntersectLeave = this.onIntersectLeave.bind(this);

        this.el.addEventListener('raycaster-intersection', this.onIntersect);
        this.el.addEventListener('raycaster-intersection-cleared', this.onIntersectLeave);

    }
  });
