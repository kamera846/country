<template>
	<div id="main">
        
        <div class="main-title wrapper">
            <div class="container">
                <h1 class="text">Country</h1>
            </div>
        </div>

        <SearchDropdown
            placeholder="Type any country name"
            withIcon />
    </div>
</template>

<script>
import SearchDropdown from "@/components/SearchDropdown.vue";
export default {
	name: "SearchEnginePage",
    components: { SearchDropdown }
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/main.scss"
</style>