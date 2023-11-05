<template>
    <div class="collection">
        <div class="header">
            <h1 class="title">Collections</h1>
            <div class="form-group">
                <div class="input-group">
                    <input type="text" placeholder="Search">
                    <button class="btn icon icon-search"></button>
                </div>
                <span class="icon icon-equalizer"></span>
            </div>
        </div>
        <div class="section products">
            <div class="product" v-for="product in products" :key="product">
                <ClassicCard :product="product" />
            </div>
        </div>
        <div class="pagination_div">
            <span class="page active">1</span>
            <span class="page">2</span>
            <span class="page">3</span>
        </div>
    </div>
</template>

<style>
.collection .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 3%;
    background-color: #EEEFBB;
}
.collection .header .form-group,
.collection .header .input-group {
    display: flex;
    align-items: center;
}
.collection .header .form-group .icon-equalizer {
    display: block;
    margin-left: 14px;
}
.collection .header .form-group .input-group {
    background-color: #FFFFDD;
    padding: 8px;
    border-radius: 24px;
}
.collection .header .form-group .input-group input,
.collection .header .form-group .input-group button {
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 14px;
    /* background-color: #FF314C; */
}
.collection .header .form-group .input-group input {
    background-color: transparent;
}
.pagination_div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
}
.pagination_div .page {
    margin: 0px 4px;
    width: 30px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background-color: #EEEFBB;
    color: #242424;
    transition: 0.5s all;
}
.pagination_div .page.active,
.pagination_div .page:hover {
    background-color: #FF314C;
    color: #fff;
    
}
</style>

<script>
import ClassicCard from '@/components/ClassicCard'
import laptopImage from '@/assets/static/images/laptop.png'
import vrheadsetImage from '@/assets/static/images/vrheadset.png'
export default {
    data() {
        return {
            products: [
                { title: 'Google VR Pro', image: vrheadsetImage, badge: 'New', compare: '$250.00', price: '$200.00' },
                { title: 'ASUS ROG Zephyrus', image: laptopImage, price: '$200.00' }
            ]
        }
    },
    components: {
        ClassicCard
    }
}

</script>