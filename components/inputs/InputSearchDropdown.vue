<template>
    <div class="search-dropdown wrapper">
        <div class="container">
            <div :class="`input-group ${ inputFocus }`">
                <div :class="`box-input`">
                    <input
                        ref="searchInput"
                        type="text"
                        :placeholder="placeholder" class="search-input"
                        @focus="onInputFocus"
                        @blur="onInputBlur" >
                    
                    <!-- Optionally Icon -->
                    <div v-if="withIcon" class="search-icon" @click="setInputFocus">
                        <IconSearch />
                    </div>
                </div>

                <div :class="`card box-dropdown`">
                    <ul>
                        <li>British Indian Ocean Territory</li>
                        <li>India</li>
                        <li>Indonesisa</li>
                        <li>Papua New Guinea</li>
                        <li>Samoa</li>
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
        withIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return { inputFocus: '' }
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
@import "@/assets/styles/components/search-dropdown.scss";
</style>