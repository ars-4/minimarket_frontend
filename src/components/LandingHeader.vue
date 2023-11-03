<template>
    <div class="landingHeader">
        <canvas @mouseenter="is_mouse_inside()" @mouseleave="is_mouse_outside()" class="landingHeaderWebGl" ref="canvas"></canvas>
        <div class="content">
            <div class="product_left_content">
                <span class="sub-heading">Beats Solo</span>
                <span class="main-heading">Wireless</span>
                <span class="product-heading">HEADPHONES</span>
                <button class="btn">Shop By Category</button>
            </div>
            <div class="description">
                <h4>Description</h4>
                <span>The Beats Solo Wireless Headphones are designed for all-day listening</span>
            </div>
        </div>
    </div>
</template>

<style>
.landingHeader {
    margin: 0px 3%;
    position: relative;
    border-radius: 8px;
    background-color: #F5DEB3;
}

.landingHeader .content {
    position: absolute;
    /* z-index: -1; */
    top: 0%;
    left: 0%;
    width: 50%;
    height: 100%;
}

.landingHeader .content .product_left_content {
    position: absolute;
    top: 25%;
    left: 15%;
    display: flex;
    flex-direction: column;
    font-weight: bolder;
}

.landingHeader .content .product_left_content .sub-heading {
    font-size: 24px;
}

.landingHeader .content .product_left_content .main-heading {
    font-size: 40px;
    margin: 14px 0px;
}

.landingHeader .content .product_left_content .product-heading {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0.4;
}

.landingHeader .content .product_left_content .btn {
    border: none;
    outline: none;
    background-color: #FF314C;
    padding: 8px 10px;
    border-radius: 14px;
    font-size: 13px;
    color: white;
    width: 150px;
    margin-top: 14px;
}

.landingHeader .content .description {
    right: 5%;
    position: absolute;
    bottom: 15%;
    font-size: 12px;
    width: 250px;
    text-align: right;
}

@media screen and (max-width:768px) {
    .landingHeader .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        /* height: 10vh; */
    }

    .landingHeader .content .product_left_content,
    .landingHeader .content .description {
        position: relative;
        margin: 0;
        padding: 0;
    }

    .landingHeader .content .product_left_content {
        width: 60%;
        margin: 24px 0;
        margin-left: -50%;
    }

    .landingHeader .content .product_left_content .sub-heading,
    .landingHeader .content .product_left_content .main-heading,
    .landingHeader .content .product_left_content .product-heading {
        margin: 0;
        padding: 0;
    }

    .landingHeader .content .product_left_content .btn {
        margin: 0;
    }

    .landingHeader .content .description {
        text-align: center;
        padding-bottom: 20px;
    }

    .landingHeader .landingHeaderWebGl {
        overflow: hidden;
    }
}
</style>

<script>

export default {

    data() {
        return {
            mouse_inside: false
        }
    },

    methods: {
        init: function () {
            let width = window.innerWidth - 100;
            let height = window.innerHeight - 100;

            if (width < 768) {
                width = window.innerWidth - 10;
                height = window.innerHeight - 300;
            }

            this.renderer = new this.$THREE.WebGLRenderer({ canvas: this.$refs.canvas, alpha: true, antialias: true });
            this.renderer.setSize(width, height);
            this.renderer.shadowMap.enabled = true;

            this.scene = new this.$THREE.Scene();
            this.cssscene = new this.$THREE.Scene();
            this.camera = new this.$THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            this.camera.position.z = 5;

            this.controls = new this.$OrbitControls(this.camera, this.renderer.domElement);
            this.controls.mouseButtons = {
                LEFT: this.$THREE.MOUSE.ROTATE,
                MIDDLE: this.$THREE.MOUSE.ROTATE,
                RIGHT: this.$THREE.MOUSE.ROTATE
            }

            this.light = new this.$THREE.DirectionalLight(0xffffff, 5);
            this.light.position.set(1, 1, 1)
            this.light.castShadow = true;
            this.scene.add(this.light);

            this.headphones;
            let model_url = new URL('../assets/static/models/wireless_crusher_headphones_black.glb', import.meta.url);
            new this.$GLTFLoader().load(
                model_url.href,
                (gltf) => {
                    this.headphones = gltf.scene;
                    this.headphones.scale.set(0.005, 0.005, 0.005)
                    this.headphones.position.x = 2;
                    this.headphones.rotation.y = -4;
                    if (width < 768) {
                        this.headphones.position.z = -1;
                        this.headphones.position.x = 0;
                    }
                    gltf.scene.traverse(function (node) {
                        if (node.isMesh) { node.castShadow = true; }
                    });
                    this.scene.add(gltf.scene);
                }
            );

            this.plane = new this.$THREE.Mesh(
                new this.$THREE.PlaneGeometry(20, 10),
                new this.$THREE.MeshStandardMaterial({ color: 0xF5DEB3 })
            );
            this.plane.receiveShadow = true;
            this.plane.rotation.x = -Math.PI / 2;
            this.plane.position.y = -2;
            if (width < 768) {
                this.plane.position.x = -9;
            }
            this.scene.add(this.plane);

            this.animate()
        },

        animate: function () {
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
            if(!this.mouse_inside){
                this.rotateHeadphones();
            }
            requestAnimationFrame(this.animate);
        },

        rotateHeadphones: function () {
            if (this.headphones) {
                this.headphones.rotation.y += 0.01;
            }
        },
        is_mouse_inside: function () {
            this.mouse_inside = true
        },
        is_mouse_outside: function () {
            this.mouse_inside = false
        }
    },

    mounted() {
        this.init()
    }
}

</script>