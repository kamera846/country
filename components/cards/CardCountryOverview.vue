<template>
    <div class="card-country-overview">

        <h6 class="title">{{ title }}</h6>

        <h1 v-if="!isLoading" class="content">{{ content }}</h1>
        <div v-else class="skeleton-container content">
            <div class="skeleton circle"></div>
        </div>

        <div v-if="!isLoading" class="box-description">

            <p class="description">
                <span class="items" v-on:mouseenter="showTooltip" v-on:mouseleave="hideTooltip">
                    {{ items?.length }} {{ itemTitle }}
                </span>
                {{ description }}
            </p>

            <!-- Component Tooltip -->
            <CardTooltipItems :class="isShowTooltip" />

        </div>
        <div v-else class="skeleton-container box-description">
            <div class="skeleton medium"></div>
        </div>
    </div>
</template>

<script>
import CardTooltipItems from "@/components/cards/CardTooltipItems.vue";

export default {
    components: { CardTooltipItems },
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "Card Title"
        },
        content: {
            type: String,
            default: "Content"
        },
        description: {
            type: String,
            default: "Card Description"
        },
        itemTitle: {
            type: String,
            default: "Item Title"
        },
        items: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            isShowTooltip: ''
        }
    },
    methods: {
        showTooltip() { this.isShowTooltip = 'active' },
        hideTooltip() { this.isShowTooltip = '' }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/card-country-overview.scss';
</style>