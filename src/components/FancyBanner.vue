<template>
    <div class="fancy-banner">
        <div class="content" :style="{ 'background-color': product.bg, 'color': product.fg }">
            <div class="left-content">
                <span class="pre-heading">{{ product.pre1 }}</span>
                <h3 class="heading">{{ product.heading }}</h3>
                <span class="pre-heading">{{ product.pre2 }}</span>
            </div>
            <img :src="product.image" alt="">
            <div class="right-content">
                <span class="pre-heading">Beats Solo Air</span>
                <h4 class="sub-heading">Summer Sale</h4>
                <span class="pre-heading">Company that's grown from 270 to 400 employees in the last 12 months</span>
                <button class="btn">Shop</button>
            </div>
        </div>
    </div>
</template>

<style>
.fancy-banner {
    margin: 24px 3%;
    width: 100%;
    position: relative;
}
.fancy-banner .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
}
.fancy-banner .content .pre-heading {
    font-size: 12px;
}
.fancy-banner .content .left-content {
    width: 25%;
}
.fancy-banner .content .left-content .heading{
    font-size: 120px;
    margin:0;
    padding: 0;
    line-height: 90%;
    margin-left: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    font-style: bold;
}
.fancy-banner .content img {
    position: absolute;
    width: 300px;
    left: 30%;
    top: -50%;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
.fancy-banner .content .right-content {
    width: 40%;
}
.fancy-banner .content .right-content .sub-heading {
    font-size: 60px;
}
.fancy-banner .content .right-content span:nth-child(3) {
    width: 65%;
    display: block;
    word-break: break-all;
}
.fancy-banner .content .right-content .btn {
    background: #fff;
    margin: 24px 0px;
    border: none;
    border-radius: 14px;
    outline: none;
    padding: 8px 12px;
    font-weight: bolder;
    color: #232323;
}

@media screen and (max-width: 768px) {
    .fancy-banner .content {
        flex-direction: column;
        padding: 10px;
    }
    .fancy-banner .content .left-content .heading {
        font-size: 70px;
        margin-left: 0;
    }
    .fancy-banner .content .right-content .sub-heading {
        font-size: 32px;
    }
    .fancy-banner .content .right-content span:nth-child(3) {
        width: 100%;
    }
    .fancy-banner .content .left-content,
    .fancy-banner .content .right-content {
        width: 80%;
        height: 200px;
    }
    .fancy-banner .content img {
        width: 200px;
        left: 45%;
        top: -44px;
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