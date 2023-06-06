<template>
    <nuxt-link class="btn-action" :to="to">
        <div v-if="withIcon" class="btn-icon">
            <ArrowLeftIcon />
        </div>

        <div class="btn-title">
            <span>{{ title }}</span>
        </div>
    </nuxt-link>
</template>

<script>
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue"

export default {
    components: { ArrowLeftIcon },
    props: {
        to: {
            type: String,
            default: '/'
        },
        title: {
            type: String,
            default: 'Button'
        },
        withIcon: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/btn-action.scss';
</style>