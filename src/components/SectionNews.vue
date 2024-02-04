<template>
    <section class="news">
        <div class="container">
            <div class="news__wrapper">
                <NewsSlider />
            </div>
        </div>
    </section>
</template>
<script>
import NewsSlider from './NewsSlider.vue'
export default {
    name: 'section-news',
    components: { NewsSlider }
}

</script>