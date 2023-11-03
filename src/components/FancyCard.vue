<template>
    <div class="fancy-card" :style="{ 'background-color': info.bg, 'color': info.fg }">
        <div class="content">
            <span class="title">{{ info.title }}</span>
            <span class="title-2">{{ info.title2 }}</span>
            <span class="title-3">{{ info.title3 }}</span>
            <button class="btn">View</button>
        </div>
        <img :src="info.image" class="transparent" alt="image">
        <span class="special-circle"></span>
    </div>
</template>

<style>
.fancy-card {
    border-radius: 8px;
    position: relative;
    height: 200px;
    overflow: hidden;
    transition: 0.5s all;
    cursor: pointer;
}
.fancy-card .content {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: bolder;
    height: 90%;
}
.fancy-card .content .title,
.fancy-card .content .btn {
    font-size: 13px;
}
.fancy-card .content .btn {
    border: none;
    background-color: #FF314C;
    padding: 5px 15px;
    border-radius: 14px;
    color: #fff;
    margin-top: 4px;
    font-weight: bolder;
}
.fancy-card .content .title-2 {
    font-size: 24px;
}
.fancy-card .content .title-3 {
    font-size: 36px;
    opacity: 0.4;
}
.fancy-card .transparent {
    position: absolute;
    min-width: 200px;
    max-width: 400px;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    top: 5%;
    right: 4%;
    transform: rotateY(180deg) rotateZ(30deg);
    transition: 0.5s all;
    z-index: 2;
}
.fancy-card:hover .transparent {
    transform: rotateY(180deg) rotateZ(0deg) translateY(-15%);
}
.fancy-card .special-circle {
    position: absolute;
    width: 75%;
    aspect-ratio: 1/1;
    background-color: #242424;
    opacity: 0.5;
    border-radius: 50%;
    top: -60%;
    right: -60%;
    transition: 0.5s all;
}
.fancy-card:hover .special-circle {
    top: -20%;
    right: -20%;
}
</style>

<script>

export default {
    props: {
        info: Object
    }
}

</script>