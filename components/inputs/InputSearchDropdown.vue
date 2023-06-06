<template>
    <div class="search-dropdown wrapper">
        <div class="container">
            <div :class="`input-group ${ inputFocus }`">
                <div :class="`box-input`">
                    <input
                        ref="searchInput"
                        type="text"
                        :placeholder="placeholder" class="search-input"
                        v-model="searchInput"
                        @focus="onInputFocus"
                        @blur="onInputBlur"
                        @input="$emit('onInput', searchInput)">
                    
                    <!-- Optionally Icon -->
                    <div v-if="withIcon" class="search-icon" @click="setInputFocus">
                        <IconSearch />
                    </div>
                </div>

                <div v-if="searchInput" :class="`card box-dropdown`">
                    <ul v-if="items?.length !== 0 && !isLoad">
                        <nuxt-link v-for="(item, idx) in items" :key="idx" :to="`/${ item?.name?.common }`">
                            <li>{{ item?.name?.common }}</li>
                        </nuxt-link>
                    </ul>
                    <ul v-else-if="items?.length === 0 && !isLoad">
                        <li class="error">Data not found</li>
                    </ul>
                    <ul v-else>
                        <li>Loading...</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";

export default {
    components: { IconSearch },
    props: {
        placeholder: {
            type: String,
            default: "Type to search..."
        },
        isLoad: {
            type: Boolean,
            default: false
        },
        withIcon: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return { inputFocus: '', searchInput: '' }
    },
    methods: {
        onInputFocus() { this.inputFocus = 'active' },
        onInputBlur() { this.inputFocus = '' },
        setInputFocus() { this.$refs.searchInput.focus() },
    },
    mounted() {
        this.setInputFocus()
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/input-search-dropdown.scss";
</style>