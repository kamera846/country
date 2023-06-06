<template>
	<div id="main">
        
        <div class="main-title wrapper">
            <div class="container">
                <h1 class="text">Country</h1>
            </div>
        </div>

        <InputSearchDropdown
            placeholder="Type any country name"
            withIcon
            :isLoad="isLoad"
            :items="countries"
            @onInput="onInputHandler" />

    </div>
</template>

<script>
import InputSearchDropdown from "@/components/inputs/InputSearchDropdown.vue";
import { mapState, mapActions } from "vuex";

export default {
	name: "SearchEnginePage",
    components: { InputSearchDropdown },
    data() {
        return {
            isLoad: false,
            countries: [],
            debounceSearch: null,
        }
    },
    computed: {
        ...mapState({
            countryState: (state) => state?.country
        })
    },
    methods: {
        ...mapActions({
            getCountries: 'country/search',
        }),
        onInputHandler(data) {
            this.isLoad = true

            clearTimeout(this.debounceSearch)

            this.debounceSearch = setTimeout(() => {
                if (data) this.fetchCountries(data)
                else {
                    this.countries = []
                    this.isLoad = false
                }
            }, 500);
        },
        fetchCountries(data) {

            const params = { name: data, fields: 'name' }

            this.getCountries(params).then(() => {

                const response = this.countryState

                if (response?.status === 404) {
                    console.error(response?.message);
                    this.countries = []
                } else this.countries = response?.data?.slice(0, 5)
                
                this.isLoad = false

            })
        }
    },
    mounted() {

    }
};
</script>

<style lang="scss">
@import "@/assets/styles/pages/main.scss";
</style>