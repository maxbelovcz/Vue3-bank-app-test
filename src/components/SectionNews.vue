<template>
    <section class="news">
        <div class="container">
            <div class="news__wrapper">
                <NewsBlock />
            </div>
        </div>
    </section>
</template>
<script>
import NewsBlock from './NewsBlock.vue';
export default {
    name: 'section-news',
    components: { NewsBlock }
}

</script>