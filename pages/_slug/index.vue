<template>
    <div id="detail-country">

        <div class="header wrapper space-before">

            <div class="button container">
                <ButtonAction
                    title="Back to Homepage"
                    withIcon />
            </div>

            <div class="container">
                <div class="box-title">
                    <h1 class="country-name">{{ this.slug }}</h1>
                    <img class="country-flag" src="https://flagcdn.com/id.svg" alt="The flag of Indonesia is composed of two equal horizontal bands of red and white.">
                </div>
                
                <div class="box-badge">
                    <ul>
                        <li class="badge badge-green">ID</li>
                        <li class="badge badge-green">Republic of Indonesia</li>
                        <li class="badge badge-green">Republic of Indonesia</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="body wrapper">
            <div class="container">
                <div class="box-overview">
                    <CardCountryOverview
                        title="Calling Code"
                        content="62"
                        itemTitle="country"
                        description="with this calling code"
                    />
                    <CardCountryOverview
                        title="Currency"
                        content="IDR"
                        itemTitle="country"
                        description="with this currency"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ButtonAction from "@/components/buttons/ButtonAction.vue";
import CardCountryOverview from "@/components/cards/CardCountryOverview.vue";

export default {
	name: "DetailCountryPage",
    components: { ButtonAction, CardCountryOverview },
    asyncData({params}) {
        const slug = params?.slug
        return { slug }
    }
};
</script>

<style lang="scss">
@import "@/assets/styles/pages/detail-country.scss";
</style>