<template>
  <div id="main">
    <div id="background">
      <background-scene />
    </div>
    <div id="foreground">
      <div class="navbar">
        <div class="brand">
          <div class="content">
            <h3>PHLOX</h3>
            <span>Buy Everlasting Products</span>
          </div>
        </div>
        <div class="nav-links">
          <a @click="$router.push('/')" class="nav-link">Home</a>
          <a @click="$router.push('/products/all/')" class="nav-link">Collections</a>
          <a href="#" class="nav-link">Catalogue</a>
        </div>
        <div class="nav-icons">
          <a href="#" class="icon icon-search"></a>
          <a href="#" class="icon icon-user"></a>
          <a @click="$router.push('/cart/')" class="icon icon-cart-bag-outline">
            <sup>{{ cart_count }}</sup>
          </a>
        </div>
      </div>
      <router-view @updateCartCount="updateCartCount()" />
      <footer-component />
    </div>
  </div>
</template>

<style>
#main {
  width: 100%;
  height: 100vh;
  position: relative;
}

#main #background {
  position: fixed;
  top: 0;
  left: 0;
}

#main #foreground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<script>
import BackgroundScene from '@/components/BackgroundScene.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {

  data() {
    return {
      cart_count: 0
    }
  },

  components: {
    'background-scene': BackgroundScene,
    'footer-component': FooterComponent
  },

  methods: {
    updateCartCount() {
      this.cart_count = this.$cart.state.items.length;
      console.log(this.$cart.state.items.length)
    }
  },

  mounted() {
    this.updateCartCount()
  },


}

</script>