<script setup lang="ts">
import LinkGroupItem from './LinkGroupItem.vue';
import { linkGroupArr } from './linkGroupArr';
</script>

<template>
    <div class="link-group">
        <LinkGroupItem
            v-for="(item, index) in linkGroupArr"
            :key="index"
            :item="item"
        />
    </div>
</template>

<style scoped lang="scss">
@import './linkGroup';
</style>
