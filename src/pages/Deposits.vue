<template>
    <div class="wrapper">
        <Header />
        <main class="page"></main>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Deposits',
    components: {
        Header,
        Footer
    },
}
</script>