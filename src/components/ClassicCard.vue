<template>

    <div class="classic-card" @click="$router.push(`/product/${product.id}`)">
        <span v-if="product.badge" class="badge">{{ product.badge }}</span>
        <div class="image">
            <img :src="product.image" alt="image">
        </div>
        <div class="content">
            <span class="title">{{ product.title }}</span>
            <div class="price">
                <span class="compare-price" v-if="product.compare">{{ product.compare }}</span>
                <span class="discounted-price">{{ product.price }}</span>
            </div>
        </div>
    </div>

</template>

<style>
.classic-card {
    position:relative;
    /* overflow: hidden; */
    width: 250px;
    margin: 8px;
}
.classic-card .image {
    width: 90%;
    min-width: 90%;
    aspect-ratio: 2/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: bisque;
    border-radius: 8px;
    overflow: hidden;
}
.classic-card .image img {
    width: 50%;
    transition: 0.5s all;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
.classic-card .image:hover img {
    transform: scale(1.1);
}
.classic-card .badge {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 40px;
    font-size: 12px;
    text-align: center;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: red;
    color: #fff;
}
.classic-card .content {
    font-size: 13px;
    width: 100%;
}
.classic-card .content .title {
    font-weight: bolder;
    margin: 8px 0px;
    display: block;
}
.classic-card .content .price {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.classic-card .content .price .compare-price {
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.5;
}
@media screen and (max-width: 600px) {
    .classic-card,
    .classic-card .image {
        width: 93%;
    }
}
</style>

<script>

export default {
    props: {
        product: Object
    }
}

</script>