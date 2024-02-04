<template>
    <swiper class="special-swiper" :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
        delay: 6500,
        disableOnInteraction: false,
    }" :modules="modules">
        <swiper-slide v-for="item in specialsList" :key="item.id">
            <div class="special-item__body">
                <div class="special-item__description">
                    <h1>{{ item.name }}</h1>
                    <p>{{ item.description }}</p>
                    <div class="special-item__buttons">
                        <MainButton />
                        <a href="#feedback-form">Узнать подробнее</a>
                    </div>
                </div>
                <div class="special-item__img">
                    <img :src="item.preview_img" alt="">
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules';
import MainButton from './MainButton.vue'
import { onMounted, ref } from 'vue';
export default {
    name: 'special-swiper',
    components: {
        Swiper,
        SwiperSlide,
        MainButton
    },
    setup() {
        const specialsList = ref([]);
        const modules = [Autoplay];

        onMounted(() => {
            fetch('http://laravel.test-work.tech/api/special')
                .then((response) => response.json())
                .then(data => specialsList.value = data)
                .catch(error => {
                    alert('Error fetching data', error);
                });
        });

        return {
            specialsList,
            modules
        };
    }
};
</script>
  