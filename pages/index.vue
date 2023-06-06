<template>
	<div id="main">
        
        <div class="main-title wrapper">
            <div class="container">
                <h1 class="text">Country</h1>
            </div>
        </div>

        <InputSearchDropdown
            placeholder="Type any country name"
            withIcon />

    </div>
</template>

<script>
import InputSearchDropdown from "@/components/inputs/InputSearchDropdown.vue";

export default {
	name: "SearchEnginePage",
    components: { InputSearchDropdown }
};
</script>

<style lang="scss">
@import "@/assets/styles/pages/main.scss";
</style>