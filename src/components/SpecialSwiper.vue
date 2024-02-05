<template>
    <swiper class="special-swiper" :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true"
        :autoplay="{ delay: 6500, disableOnInteraction: false }" :modules="modules">
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import MainButton from './MainButton.vue';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

export default {
    name: 'special-swiper',
    components: {
        Swiper,
        SwiperSlide,
        MainButton,
    },
    setup() {
        const modules = [Autoplay];
        const store = useStore();
        const specialsList = ref([]);

        onMounted(async () => {
            await store.dispatch('fetchSpecials');
            specialsList.value = store.getters.getSpecialsList;
        });

        return {
            specialsList,
            modules,
        };
    },
};
</script>


  