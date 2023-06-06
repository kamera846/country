<template>
    <div class="card card-country-location">

        <div v-if="latLong" class="latLong">
            <p class="name">LatLong</p>
            <h1 class="content">{{ latLong?.latitude }}, {{ latLong?.longitude }}</h1>
        </div>

        <div v-if="location?.length != 0" class="location">
            <p v-for="(item, idx) in location" :key="idx" class="name">{{ item?.name }}: <strong class="value">{{ item?.value }}</strong></p>
        </div>

        <img v-if="iconUrl" :src="iconUrl" alt="Globe Image" class="icon">

    </div>
</template>

<script>
export default {
    props: {
        latLong: {
            type: Object,
            default: () => null
        },
        location: {
            type: Array,
            default: () => []
        },
        iconUrl: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/card-country-location.scss';
</style>