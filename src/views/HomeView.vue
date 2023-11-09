<template>
  <div class="home">

    <div class="section landing">
      <LandingHeader />
    </div>

    <div class="section categories">
      <div v-for="product in featured_products" :key="product"  :class="product.width">
        <FancyCard :info="product" />
      </div>
    </div>

    <div class="section banner">
      <FancyBanner :product="banners[0]" />
    </div>

    <div class="section products">
      <div class="product" v-for="product in products" :key="product">
        <ClassicCard :product="product" />
      </div>
    </div>

    <div class="section banner">
      <FancyBanner :product="banners[1]" />
    </div>

  </div>
</template>

<style>
.section.categories {
  margin: 8px 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.section.categories .card-300 {
  width: 26%;
  margin: 8px 0px;
}
.section.categories .card-600 {
  width: 47%;
  margin: 8px 0px;
}
.section.banner {
  min-height: 90vh;
  display: flex;
  align-items: flex-end;
}
.section.products {
  margin: 8px 1.5%;
  display: flex;
  justify-content: flex-start;
}
.section.products .product {
  margin: 8px 8px;
  cursor: pointer;
}
@media screen and (max-width: 760px) {
  .section.categories .card-300 {
    width: 100%;
  }
  .section.categories .card-600 {
    width: 100%;
  }
  .section.banner {
    width: 100%;
    max-height: 10vh;
    overflow: hidden !important;
    align-items: center;
    justify-content: center;
  }
  .section.products {
    flex-direction: column;
  }
}
</style>

<script>
import LandingHeader from '@/components/LandingHeader'
import FancyCard from '@/components/FancyCard'
import FancyBanner from '@/components/FancyBanner'
import ClassicCard from '@/components/ClassicCard'

import NikeShoesImage from '@/assets/static/images/nike_shoes_green.png'
import JacketRedImage from '@/assets/static/images/jacket_red.png'
import laptopImage from '@/assets/static/images/laptop.png'
import ps4Image from '@/assets/static/images/ps4.png'
import vrheadsetImage from '@/assets/static/images/vrheadset.png'
import alexaImage from '@/assets/static/images/alexa.png'

import red_headset from '@/assets/static/images/red_headset.png'
import black_wrist_watch from '@/assets/static/images/black_wrist_watch.png'

export default {

  data() {
    return {
      featured_products: [
        { title: 'Walk in', title2: 'Nike', title3: 'Sneakers', image: NikeShoesImage, bg: '#8ECB19', fg: '#fff', width:'card-300'},
        { title: 'Wear', title2: 'Adidas', title3: 'Jacket', image: JacketRedImage, bg: '#B7000A', fg: '#fff', width:'card-300'},
        { title: 'Advance in technology with', title2: 'ASUS ROG', title3: 'Zephyrus Laptop', image: laptopImage, bg: '#000', fg: '#fff', width:'card-600'},
        { title: 'Play with', title2: 'Sony', title3: 'Playstation 4', image: ps4Image, bg: '#FFECBD', fg: '#000', width:'card-600'},
        { title: 'Explore with', title2: 'Amazon', title3: 'VR Headset', image: vrheadsetImage, bg: '#FFC612', fg: '#fff', width:'card-300'},
        { title: 'Talk with', title2: 'Amazon', title3: 'Alexa', image: alexaImage, bg: '#5A7FCE', fg: '#fff', width:'card-300'}
      ],
      banners: [
        {'pre1': '20% OFF', 'heading': 'Listen Beats', 'pre2': '15 Nov To 7 Dec', 'image': red_headset, 'bg': '#B7000A', 'fg': '#fff'},
        {'pre1': '20% OFF', 'heading': 'Happy Hours', 'pre2': '15 Nov To 7 Dec', 'image': black_wrist_watch, 'bg': '#242424', 'fg': '#fff'}
      ],
      products: [
        { id: 1, title: 'Google VR Pro', image: vrheadsetImage, badge: 'New', compare: '$250.00', price: '$200.00'},
        { id: 2, title: 'ASUS ROG Zephyrus', image: laptopImage, price: '$200.00'}
      ]
    }
  },

  components: {
    LandingHeader,
    FancyCard,
    FancyBanner,
    ClassicCard
    }
}
</script>
