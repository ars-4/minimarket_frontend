import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { cart } from './cart'
import ScrollMagic from 'scrollmagic'
// import AddIndicators from '@scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './assets/static/global.styles.css'


const controller = new ScrollMagic.Controller();
const app = createApp(App)

app.config.globalProperties.$ScrollMagic = ScrollMagic;
app.config.globalProperties.$controller = controller;
app.config.globalProperties.$THREE = THREE;
app.config.globalProperties.$OrbitControls = OrbitControls;
app.config.globalProperties.$CSS3DRenderer = CSS3DRenderer;
app.config.globalProperties.$CSS3DObject = CSS3DObject;
app.config.globalProperties.$GLTFLoader = GLTFLoader;

app.use(cart)
app.config.globalProperties.$cart = cart

app.use(router)
app.mount('#app')
