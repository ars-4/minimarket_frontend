<template>

    <canvas id="canvas"></canvas>

</template>

<script>

export default {
    methods: {
        init: function() {

            this.renderer = new this.$THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), alpha: true });
            this.renderer.setSize( window.innerWidth, window.innerHeight );

            this.scene = new this.$THREE.Scene();
            this.camera = new this.$THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            this.camera.position.z = 5;



            this.cube = new this.$THREE.Mesh( new this.$THREE.BoxGeometry( 1, 1, 1 ), new this.$THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );
            // this.scene.add( this.cube );



            this.animate()
        },

        animate: function() {
            this.renderer.render( this.scene, this.camera );
            requestAnimationFrame( this.animate );
        },

        rotateCube: function(x,y) {
            this.cube.rotation.x += x;
            this.cube.rotation.y += y;
        }

    },

    mounted: function() {
        this.init()
    }
}

</script>