<script setup lang="ts"></script>
<template>
    <div class="header">
        <div class="header-circle-img">
            <img
                src="/IMG.jpg"
                alt=""
            />
        </div>
        <h1 class="title">@blackramble</h1>
        <h2 class="subtitle">
            Frontend Developer | HODLER
            <img
                src="/bitcoin.png"
                alt=""
            />
        </h2>
    </div>
</template>
<style scoped lang="scss">
$head-sticker: 120px;

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    flex-direction: column;
}

.title {
    padding-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    color: #fff9;

    img {
        display: inline-block;
        padding-left: 0.5rem;
        height: 16px;
    }
}

.header-circle-img {
    // overflow: hidden;
    width: $head-sticker;
    height: $head-sticker;
    border-radius: 50%;

    img {
        display: block;
        width: $head-sticker;
        height: $head-sticker;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>
