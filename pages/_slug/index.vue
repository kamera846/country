<template>
    <div id="detail-country">

        <div class="header wrapper space-before">

            <div class="button container">

                <!-- Component Button Action -->
                <ButtonAction
                    title="Back to Homepage"
                    withIcon />

            </div>

            <div class="container">

                <div class="box-title">
                    <h1 v-if="!isLoading" class="country-name">{{ this.slug }}</h1>
                    <div v-else class="skeleton small country-name"></div>

                    <img v-if="!isLoading" class="country-flag" src="https://flagcdn.com/id.svg" alt="The flag of Indonesia is composed of two equal horizontal bands of red and white.">
                </div>
                
                <div class="box-badge">
                    <ul v-if="!isLoading">
                        <li class="badge badge-green">ID</li>
                        <li class="badge badge-green">Republic of Indonesia</li>
                        <li class="badge badge-green">Republic of Indonesia</li>
                    </ul>
                    <div v-else class="skeleton small"></div>
                </div>

            </div>

        </div>

        <div class="body wrapper">
            <div class="container">
                
                <div class="box-overview">

                    <!-- Component Card Country Location -->
                    <CardCountryLocation
                        :isLoading="isLoading"
                        :latLong="countryLatLong"
                        :iconUrl="require('@/assets/images/svg/globe.svg')" />

                    <!-- Component Card Country Location -->
                    <CardCountryLocation :isLoading="isLoading" :location="countryLocation" />

                </div>

            </div>

            <div class="container">

                <div class="box-overview">

                    <!-- Component Card Country Overview -->
                    <CardCountryOverview
                        :isLoading="isLoading"
                        title="Calling Code"
                        content="62"
                        itemTitle="country"
                        description="with this calling code" />

                    <!-- Component Card Country Overview -->
                    <CardCountryOverview
                        :isLoading="isLoading"
                        title="Currency"
                        content="IDR"
                        itemTitle="country"
                        description="with this currency" />

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import ButtonAction from "@/components/buttons/ButtonAction.vue";
import CardCountryOverview from "@/components/cards/CardCountryOverview.vue";
import CardCountryLocation from "@/components/cards/CardCountryLocation.vue";

export default {
	name: "DetailCountryPage",
    components: { ButtonAction, CardCountryOverview, CardCountryLocation },
    asyncData({params}) {
        const slug = params?.slug
        return { slug }
    },
    data() {
        return {
            isLoading: false,
            countryLatLong: {
                latitude: "-5.0",
                longitude: "120.0"
            },
            countryLocation: [
                { name: 'Capital', value: 'Jakarta' },
                { name: 'Region', value: 'Asia' },
                { name: 'Subregion', value: 'South-Eastern Asia' },
            ]
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/styles/pages/detail-country.scss";
</style>