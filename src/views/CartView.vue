<template>
    <div class="cart-view">
        <div class="cart-items">
            <h3 class="title">Shopping Cart</h3>
            <div class="items">
                <div class="item header">
                    <span class="title">Product</span>
                    <span class="quantity">Qty</span>
                    <span class="price">Total Price</span>
                    <span class="delete">Delete</span>
                </div>
                <div class="item" v-for="item in $cart.state.items" :key="item.id">
                    <span class="title">Lorem Ipsum Dolor</span>
                    <span class="quantity">{{ item.qty }}</span>
                    <span class="price">$ 1099.00</span>
                    <span class="delete" @click="removeItem(item.id)">&times;</span>
                </div>
            </div>
            <div class="item sub-footer">
                <div class="sub">
                    <span>
                        Subtotal:
                    </span>
                    <span>
                        $ 1099.00
                    </span>
                </div>
                <div class="tax">
                    <span>
                        Tax:
                    </span>
                    <span>
                        $ 109.00
                    </span>
                </div>
            </div>
            <div class="item footer">
                <span class="back">&lt; &nbsp;Continue Shopping</span>
                <div class="total">
                    <span>
                        Total:
                    </span>
                    <span>
                        $ 1099.00
                    </span>
                </div>
            </div>
        </div>
        <div class="payment-info">
            <h3>Payment Info</h3>
            <div class="personal">
                <div class="form-group">
                    <input type="text" placeholder="Full Name">
                    <input type="text" placeholder="Full Address">
                </div>
            </div>
            <div class="payment">
                <div class="type">
                    <div class="form-group">
                        <label @click="payment(true)">
                            <input checked type="radio" name="1">
                            &nbsp;<span> Credit Card</span>
                        </label>
                        <label @click="payment(false)">
                            <input type="radio" name="1">
                            &nbsp;<span> Payoneer</span>
                        </label>
                    </div>
                </div>
                <div class="card" v-if="card">
                    <div class="form-group">
                        <div class="front-view">
                            <input type="text" placeholder="Full Name According to Card">
                            <input type="text" placeholder="Card Number">
                        </div>
                        <div class="input-group">
                            <select>
                                <option value="0" selected>Month</option>
                            </select>
                            <select>
                                <option value="0" selected>Year</option>
                            </select>
                            <input type="number" placeholder="CVC/CVV" min="0" max="9999" maxlength="3">
                        </div>
                    </div>
                </div>
                <div class="payoneer" v-else>
                    <div class="form-group">
                        <input type="text" placeholder="Payoneer Username">
                        <input type="text" placeholder="Payoneer Email">
                    </div>
                </div>
            </div>
            <button class="btn">Checkout</button>
        </div>
    </div>
</template>


<style>
.cart-view {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 80vh;
    margin: 24px 3%;
}

.cart-view .cart-items {
    width: 55%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
}

.cart-view .cart-items>.title {
    font-size: 40px;
}

.cart-view .cart-items .items {
    margin: 24px 0px;
}

.cart-view .cart-items .items .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
    background-color: #EEEDBB;
    margin: 2px 0px;
    border-radius: 14px;
}

.cart-view .cart-items .items .item:not(.header) {
    font-size: 13px;
    opacity: 0.8;
}

.cart-view .cart-items .items .item span {
    display: block;
    width: 20%;
}

.cart-view .cart-items .items .item span.title {
    width: 40%;
}

.cart-view .cart-items .items .item:not(.header) span.quantity::after {
    content: 'x';
    margin: 0px 4px;
}

.cart-view .cart-items .items .item span.delete {
    text-align: center;
    font-size: 24px;
    cursor: pointer;
}

.cart-view .cart-items .items .item.header {
    font-weight: bolder;
}

.cart-view .cart-items .sub-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-bottom: 1px solid #EEEDBB;
    padding: 24px 0px;
}

.cart-view .cart-items .sub-footer>div {
    width: 20%;
    font-size: 13px;
    opacity: 0.7;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-view .cart-items .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
}

.cart-view .cart-items .footer>div {
    width: 20%;
    font-size: 13px;
    opacity: 0.7;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.cart-view .payment-info {
    width: 20%;
    border-left: 1px solid #242424;
    padding-left: 5%;
}

.cart-view .payment-info>h3 {
    font-size: 30px;
}

.cart-view .payment-info input,
.cart-view .payment-info select {
    padding: 8px 12px;
    border-radius: 14px;
    border: none;
    outline: none;
    background-color: #EEEDBB;
    margin: 4px 0px;
}

.cart-view .payment-info .personal {
    margin: 24px 0px;
}

.cart-view .payment-info .personal .form-group input,
.cart-view .payment-info .payoneer .form-group input,
.cart-view .payment-info .payment .card .front-view input {
    width: 100%;
}

.cart-view .payment-info .payment .type .form-group {
    display: flex;
    font-size: 12px;
}

.cart-view .payment-info .payment .type .form-group label {
    display: flex;
    align-items: center;
    margin-right: 12px;
}

.cart-view .payment-info .payment .card .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110%;
}

.cart-view .payment-info .payment .card .input-group input,
.cart-view .payment-info .payment .card .input-group select {
    width: 34%;
}

.cart-view .payment-info .payment .card .input-group select:nth-child(2) {
    margin: 0px 4px;
}

.cart-view .payment-info>.btn {
    margin-top: 32px;
    width: 110%;
    padding: 24px;
    border-radius: 14px;
    border: none;
    outline: none;
    background-color: #B7000A;
    color: #fff;
    font-weight: bolder;
    font-size: 24px;
}

@media screen and (max-width: 768px) {
    .cart-view {
        flex-direction: column;
    }

    .cart-view .cart-items {
        width: 100%;
    }

    .cart-view .cart-items .sub-footer>div,
    .cart-view .cart-items .footer>div {
        width: 40%;
    }

    .cart-view .payment-info {
        width: 90%;
        margin: 3% 0px;
        border: none;
    }

    .cart-view .payment-info .personal .form-group input,
    .cart-view .payment-info .payoneer .form-group input,
    .cart-view .payment-info .payment .card .front-view input {
        width: 90%;
    }
    .cart-view .payment-info .payment .card .input-group,
    .cart-view .payment-info>.btn {
        width: 100%;
    }

}
</style>


<script>

export default {
    data() {
        return {
            card: true
        }
    },
    methods: {
        payment(value) {
            this.card = value
        },
        removeItem(id) {
            this.$store.commit('removeItem', id)
        }
    }
}

</script>