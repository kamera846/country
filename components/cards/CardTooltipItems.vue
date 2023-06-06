<template>
    <div class="card-tooltip-items">
        <ul>
            <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/card-tooltip-items.scss';
</style>