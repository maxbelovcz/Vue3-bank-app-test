<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <SectionSpecial />
            <SectionExchangeRates />
            <SectionNews />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import SectionSpecial from '../components/SectionSpecial.vue';
import SectionExchangeRates from '../components/SectionExchangeRates.vue';
import SectionNews from '../components/SectionNews.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        SectionSpecial,
        SectionExchangeRates,
        SectionNews,
        Footer
    },
}
</script>
