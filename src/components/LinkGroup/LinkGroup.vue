<script setup lang="ts">
import LinkGroupItem from './LinkGroupItem.vue';

const items = [
    { title: 'Instagram', href: 'https://www.instagram.com/hui_7/' },
    { title: 'Github', href: 'https://github.com/blackramble' },
    {
        title: 'Notion',
        href: 'https://www.notion.so/510701964d0b44839367d51399b5cf5c?v=567fac178c7d4b1e8e96e404ee6a4917&pvs=4'
    },
    {
        title: 'Blog',
        href: 'https://blackramble.vercel.app/blog'
    },
    {
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/%E5%8C%AF%E8%B1%90-%E9%99%B3-651a23273/'
    },
    { title: 'bjtfetopa@gmail.com', href: 'mailto:bjtfetopa@gmail.com' }
];
</script>
<template>
    <div class="link-group">
        <LinkGroupItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
        />
    </div>
</template>
<style scoped lang="scss">
@import './linkGroup';
</style>
