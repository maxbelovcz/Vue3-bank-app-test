<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <clientsData />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import clientsData from '../components/clientsData.vue';

export default {
    name: 'onlineBank',
    components: {
        Header,
        Footer,
        clientsData
    },
}
</script>