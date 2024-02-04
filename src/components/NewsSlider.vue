<template>
    <div class="news-top">
        <h2 class="news-title">{{ newsTitle }}</h2>
    </div>
    <Swiper class="news-swiper" :slidesPerView="`${autoValue}`" :spaceBetween="30" :grabCursor="true" :loop="true"
        :centeredSlides="true" :autoplay="{
            delay: 6500,
            disableOnInteraction: false,
        }" :modules="modules">
        <SwiperSlide class="news-slide" v-for="news in newsList" :key="news.id">
            <div class="news__img">
                <img :src="`/${news.imgPath}`" alt>
            </div>
            <div class="news-item__body">
                <div class="news-item__title">{{ news.title }}</div>
                <div class="news-item__text">{{ news.text }}</div>
            </div>
            <a :href="`/${news.linkPath}`">Читать далее</a>
        </SwiperSlide>
    </Swiper>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    name: 'news-slider',
    data() {
        return {
            modules: [
                Autoplay,
                Navigation
            ],
            newsTitle: 'Полезные статьи',
            autoValue: 'auto',
            newsList: [
                {
                    id: 'news1',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №1',
                    text: 'Описание специального предложения №1 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news2',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №2',
                    text: 'Описание специального предложения №3 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news3',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №3',
                    text: 'Описание специального предложения №3 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news4',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №4',
                    text: 'Описание специального предложения №4 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news5',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №5',
                    text: 'Описание специального предложения №5 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news6',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №6',
                    text: 'Описание специального предложения №6 Банка',
                    linkPath: 'credits'
                },
            ],
        };
    },
    components: {
        Swiper,
        SwiperSlide
    },
};
</script>
  