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
                    <h1 v-if="!isCountryLoading" class="country-name">{{ country?.name }}</h1>
                    <div v-else class="skeleton small country-name"></div>

                    <img v-if="!isCountryLoading" class="country-flag" :src="country?.flags?.svg" :alt="country?.flags?.alt">
                </div>
                
                <div class="box-badge">
                    <ul v-if="!isCountryLoading">
                        <li v-for="(item, idx) in country?.altSpellings" :key="idx" class="badge badge-green">{{ item }}</li>
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
                        :isLoading="isCountryLoading"
                        :latLong="country?.latlng"
                        :iconUrl="require('@/assets/images/svg/globe.svg')" />

                    <!-- Component Card Country Location -->
                    <CardCountryLocation :isLoading="isCountryLoading" :location="country?.locations" />

                </div>

            </div>

            <div class="container">

                <div class="box-overview">

                    <!-- Component Card Country Overview -->
                    <CardCountryOverview
                        :isLoading="isCallingCodeLoading"
                        title="Calling Code"
                        :content="callingcode?.codes[0]"
                        :items="callingcode?.countries"
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
import { mapState, mapActions } from "vuex";
import { generateCallingCodeFromIDD } from "@/commons/utils";

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
    head() {
        return {
            title: `${ this.slug } | Country`
        }
    },
    data() {
        return {
            isLoading: false,
            isCountryLoading: true,
            isCallingCodeLoading: true,

            country: null,
            callingcode: null,
        }
    },
    computed: {
        ...mapState({
            countryState: (state) => state?.country,
            callingcodeState: (state) => state?.callingcode,
        })
    },
    methods: {
        generateCallingCodeFromIDD,
        ...mapActions({
            getCountry: 'country/search',
            getCallingCode: 'callingcode/code',
        }),
        fetchCountry() {
            this.isCountryLoading = true

            const params = {
                name: this.slug,
                fields: 'name,flags,latlng,altSpellings,capital,region,subregion,idd',
                fullText: true
            }

            this.getCountry(params).then(() => {

                const response = this.countryState

                if (response?.status === 404) console.error(response?.message);
                else {
                    const data = response?.data[0]

                    const object = {
                        name: data?.name?.common,
                        flags: data?.flags,
                        altSpellings: data?.altSpellings,
                        callingCode: this.generateCallingCodeFromIDD(data?.idd),
                        latlng: {
                            latitude: data?.latlng[0].toFixed(1),
                            longitude: data?.latlng[1].toFixed(1),
                        },
                        locations: [
                            { name: 'capital', value: data?.capital[0] },
                            { name: 'region', value: data?.region },
                            { name: 'subregion', value: data?.subregion },
                        ]
                    }
                    this.country = object
                }

                this.isCountryLoading = false
                this.fetchCallingCode()
            })
        },
        fetchCallingCode() {
            this.isCallingCodeLoading = true

            const params = {
                code: this.country?.callingCode,
                fields: 'currencies,callingCodes,name',
            }

            this.getCallingCode(params).then(() => {
                const response = this.callingcodeState

                if (response?.status === 404) console.error(response?.message);
                else {
                    const data = response?.data
                    this.callingcode = {
                        codes: [],
                        countries: [],
                        currencyCodes: [],
                        currencyCode: '',
                    }
                    
                    data?.map(item => { 
                        this.callingcode.codes = item?.callingCodes
                        this.callingcode.countries.push(item?.name)
                        this.callingcode.currencyCodes = item?.currencies
                        this.callingcode.currencyCode = item?.currencies[0]?.code
                    })

                }

                this.isCallingCodeLoading = false
            })
        }
    },
    mounted() {
        this.fetchCountry()
    }
};
</script>

<style lang="scss">
@import "@/assets/styles/pages/detail-country.scss";
</style>