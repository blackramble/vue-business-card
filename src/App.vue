<script setup lang="ts">
import MainContainer from './components/MainContainer/MainContainer.vue';
import { inject } from '@vercel/analytics';

inject();
</script>

<template>
    <MainContainer />
</template>

<style scoped></style>
