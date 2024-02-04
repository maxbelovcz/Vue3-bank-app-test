<template>
    <header class="header">
        <div class="container">
            <div class="header-wrapper">
                <Logo />
                <Navbar />
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue';
import Navbar from './Navbar.vue';


export default {
    name: 'main-header',
    components: { Logo, Navbar }
}
</script>
