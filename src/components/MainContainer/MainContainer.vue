<script setup lang="ts">
import Header from '../Header/Header.vue';
import LinkGroup from '../LinkGroup/LinkGroup.vue';
</script>

<template>
    <div class="back">
        <div class="back-filter"></div>
        <div class="main-container">
            <Header />
            <LinkGroup />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './mainContainer';
</style>
