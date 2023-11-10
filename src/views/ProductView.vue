<template>
    <div class="product-view">

        <div class="body">
            <div class="image-container">
                <div class="main-image">
                    <img ref="main_image" src="https://picsum.photos/400" alt="">
                </div>
                <div class="images" @click="changeMainImage($event)">
                    <img class="active" src="https://picsum.photos/100" alt="">
                    <img src="https://picsum.photos/100" alt="">
                    <img src="https://picsum.photos/100" alt="">
                    <img src="https://picsum.photos/100" alt="">
                </div>
            </div>
            <div class="content-container">
                <h3 class="title">{{ product.title }}</h3>
                <div class="price">
                    <span class="price">23.00</span>
                </div>
                <div class="description">
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veritatis provident esse, hic
                        quasi sed, ipsa dolorem, similique suscipit quisquam assumenda quod odio vel incidunt omnis placeat.
                        Rem, vero sed!
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veritatis provident esse, hic
                        quasi sed, ipsa dolorem, similique suscipit quisquam assumenda quod odio vel incidunt omnis placeat.
                        Rem, vero sed!
                    </span>
                </div>
                <div class="form-group">
                    <button class="btn" @click="addToCart()">Add to cart</button>
                </div>
                <div class="special-info">
                    <div class="category">
                        <span>Category: </span>
                        <span>Accessories</span>
                    </div>
                    <div class="tags">
                        <span>Tags: </span>
                        <span>Accessories</span>,
                        <span>Clothing</span>
                    </div>
                    <div class="share">
                        <span>Share: </span>
                        <a href="#" class="icon icon-facebook"></a>
                        <a href="#" class="icon icon-twitter"></a>
                        <a href="#" class="icon icon-instagram"></a>
                        <a href="#" class="icon icon-linkedin2"></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>

.product-view {
    /* min-height: 100vh; */
    margin: 24px 10%;
}
.product-view .body {
    display: flex;
    justify-content: center;
}
.product-view .body > div {
    width: 50%;
    margin: 24px;
}

.product-view .body .image-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.product-view .body .image-container .main-image {
    width: 100%;
    aspect-ratio: 1.5/1;
    overflow: hidden;
    margin-bottom: 24px;
}
.product-view .body .image-container .main-image img {
    width: 100%;
}
.product-view .body .image-container .images {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
}
.product-view .body .image-container .images img {
    width: 15%;
}
.product-view .body .image-container .images img.active {
    opacity: 0.5;
}

.product-view .body .content-container {
    display: flex;
    flex-direction: column;
}
.product-view .body .content-container .title {
    font-size: 32px;
    font-weight: bolder;
}
.product-view .body .content-container .price {
    font-size: 14px;
    margin: 24px 0px;
    font-weight: bolder;
}
.product-view .body .content-container .price span {
    margin-right: 14px;
}
.product-view .body .content-container .price span::before {
    content: '$ ';
}
.product-view .body .content-container .description {
    margin-bottom: 14px;
    font-size: 12px;
}
.product-view .body .content-container .description span {
    display: block;
    margin-bottom: 8px;
}
.product-view .body .content-container .btn {
    margin: 24px 0;
    border: none;
    outline: none;
    padding: 8px 12px;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 4px;
    background-color: #FF314C;
    color: #fff;
    cursor: pointer;
}

.product-view .body .content-container .special-info {
    display: flex;
    flex-direction: column;
}
.product-view .body .content-container .special-info > div {
    margin: 4px 0px;
    font-size: 12px;
}
.product-view .body .content-container .special-info > div span:first-child {
    font-weight: bolder;
    text-decoration: underline;
    text-underline-offset: 4px;
    margin-right: 2px;
}
.product-view .body .content-container .special-info > div span:not(:first-child) {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.5s all;
}
.product-view .body .content-container .special-info > div span:hover,
.product-view .body .content-container .special-info > div a:hover {
    opacity: 1;
}
.product-view .body .content-container .special-info .share {
    display: flex;
    align-items: center;
}
.product-view .body .content-container .special-info .share a {
    text-decoration: none;
    margin: 0px 4px;
    font-size: 13px;
    color: #242424;
    opacity: 0.7;
    transition: 0.5s all;
}

@media screen and (max-width: 768px) {
    .product-view .body {
        flex-direction: column;
    }
    .product-view .body > div {
        width: 100%;
    }
    .product-view .body > div.image-container{
        margin-left: 0;
    }
    
}
</style>

<script>
export default {
    
    data() {
        return {
            product: {
                id: 0,
                title: 'Google VR Pro',
                badge: 'New',
                compare: '$250.00',
                price: '$200.00' 
            }
        }
    },

    methods: {
        changeMainImage(event) {
            this.$refs.main_image.src = event.target.src.replace('100', '400');
            event.target.classList.add('active');
            for (let i = 0; i < event.target.parentNode.children.length; i++) {
                if (event.target.parentNode.children[i] !== event.target) {
                    event.target.parentNode.children[i].classList.remove('active');
                }
            }
        },

        addToCart() {
            this.$cart.commit('add_item', {
                id: this.product.id,
                qty: 1
            });
            this.$emit('updateCartCount');
        }
    },

    created() {
        this.product.id = this.$route.params.id;
    }

}
</script>
