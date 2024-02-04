<template>
    <section class="special">
        <div class="container">
            <div class="special__wrapper">
                <SpecialSwiper />
            </div>
        </div>
    </section>
</template>
<script>
import SpecialSwiper from './SpecialSwiper.vue'
export default {
    name: 'section-special',
    components: { SpecialSwiper }
}

</script>