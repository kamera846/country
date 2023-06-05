<template>
	<Tutorial />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "IndexPage",
	computed: {
        ...mapState({
            countryState: (state) => state?.country
        })
    },
    methods: {
        ...mapActions({
            listCountry: "country/countries",
            searchCountry: "country/search",
        }),

        fetchCountries() {
            const params = {
                fields: 'name,flags'
            }
            this.listCountry(params).then(() => {
                const response = this.countryState

                if (response?.status === 404) console.error(response?.message);
                else console.log(response?.data);
            })
        }
    },
    mounted() {
        this.fetchCountries()
    }
};
</script>
