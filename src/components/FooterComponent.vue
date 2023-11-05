<template>

    <div class="footer-component">
        <div class="footer-content">
            <div class="brand">
                <h3>PHLOX</h3>
            </div>
            <span class="description">
                Copyright © 2022. All Rights Reserved.
                <br>
                Every picture is property of its owner.
                So, please respect their rights.
            </span>
            <div class="social-links">
                <a href="#" class="icon icon-facebook"></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-instagram"></a>
                <a href="#" class="icon icon-linkedin2"></a>
            </div>
        </div>
        <div class="quick-links">
            <a href="#">Home</a>
            <a href="#">Collections</a>
            <a href="#">Catalogue</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div class="contact">
            <span class="title">Contact Us</span>
            <span class="address">123 Street Name, City Name, Country</span>
            <span class="phone">123-456-7890</span>
            <span class="email">b5N0i@example.com</span>
        </div>
        <div class="newsletter">
            <span class="title">Newsletter</span>
            <div class="input-group">
                <input type="text">
                <button>Subscribe</button>
            </div>
        </div>
    </div>

</template>

<style>

.footer-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EEEDBB;
    color: #242424;
    padding: 24px;
}
.footer-component .footer-content {
    display: flex;
    flex-direction: column;
    width: 20%;
}
.footer-component .footer-content .description {
    margin: 14px 0px;
    font-size: 13px;
}
.footer-component .footer-content .social-links a,
.footer-component .quick-links a {
    color: #242424;
    text-decoration: none;
    margin: 0px 4px;
}
.footer-component .footer-content .social-links a:first-child {
    margin-left: 0;
}

.footer-component .quick-links {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer-component .quick-links a {
    margin: 8px 0px;
    display: block;
    font-size: 12px;
}

.footer-component .contact {
    width: 20%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
}

.footer-component .newsletter {
    display: flex;
    flex-direction: column;
}
.footer-component .newsletter .input-group {
    display: flex;
    margin: 24px 0px;
    border: 1px solid #DDDCAA;
    padding: 4px;
    background-color: #DDDCAA;
    border-radius: 14px;
}
.footer-component .newsletter .input-group input {
    padding: 8px;
    border: none;
    outline: none;
    margin-right: 4px;
    border-radius: 14px;
    background: transparent;
}
.footer-component .newsletter .input-group button {
    padding: 8px;
    font-weight: bolder;
    background-color: #FF314C;
    border: 1px solid #FF314C;
    outline: none;
    border-radius: 14px;
    color: #fff;
}
@media screen and (max-width:768px) {
    .footer-component {
        flex-direction: column;
    }
    .footer-component .footer-content,
    .footer-component .quick-links,
    .footer-component .contact,
    .footer-component .newsletter {
        width: 100%;
    }
    .footer-component .quick-links {
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
    }
    .footer-component .newsletter .input-group {
        justify-content: space-between;
    }
}

</style>