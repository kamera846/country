<template>
    <div id="detail-country">
        <div class="header wrapper space-before">
            <div class="container">
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
                <!-- Body Contents -->
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAction from "@/components/ButtonAction.vue";
export default {
	name: "DetailCountryPage",
    components: { ButtonAction },
    asyncData({params}) {
        const slug = params?.slug
        return { slug }
    }
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/detail-country.scss"
</style>