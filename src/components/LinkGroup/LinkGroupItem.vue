<script setup lang="ts">
import { linkGroupArrType } from './types';

const { item } = defineProps<{ item: linkGroupArrType }>();
const { title, href } = item;
</script>

<template>
    <a
        class="link-group-item"
        :href="href"
        target="_blank"
        rel="noreferrer noopenner"
    >
        {{ title }}
    </a>
</template>

<style scoped lang="scss">
@import './linkGroup';
</style>
