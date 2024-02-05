<template>
    <div class="news-top">
        <h2 class="news-title">{{ newsTitle }}</h2>
    </div>
    <div class="news-block">
        <div class="news-item" v-for="(news, index) in displayedNews" :key="news.id">
            <div class="news__img">
                <img :src="`/${news.imgPath}`" alt>
            </div>
            <div class="news-item__body">
                <div class="news-item__title">{{ news.title }}</div>
                <div class="news-item__text">{{ news.text }}</div>
            </div>
            <a :href="`/${news.linkPath}`">Читать далее</a>
        </div>
    </div>
    <ButtonShowMore v-if="remainingNews.length > 0" @click="showMoreNews" />
</template>
  
<script>
import ButtonShowMore from './ButtonShowMore.vue';
export default {
    name: 'news-block',
    components: { ButtonShowMore },
    data() {
        return {
            newsTitle: 'Полезные статьи',
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
                    text: 'Описание специального предложения №2 Банка Описание специального предложения №2 Банка Описание специального предложения №2 Банка Описание специального предложения №2 Банка',
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
                {
                    id: 'news7',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №7',
                    text: 'Описание специального предложения №7 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news8',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №8',
                    text: 'Описание специального предложения №8 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news9',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №9',
                    text: 'Описание специального предложения №9 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news10',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №10',
                    text: 'Описание специального предложения №10 Банка',
                    linkPath: 'credits'
                },
                {
                    id: 'news11',
                    imgPath: 'img/bank-img3.jpg',
                    title: 'Специальное предложение №11',
                    text: 'Описание специального предложения №11 Банка',
                    linkPath: 'credits'
                },
            ],
            displayedNews: [],
            remainingNews: []
        };
    },
    mounted() {
        this.showMoreNews();
    },
    methods: {
        showMoreNews() {
            const currentlyDisplayed = this.displayedNews.length;
            const nextBatch = this.newsList.slice(currentlyDisplayed, currentlyDisplayed + 3);
            this.displayedNews = this.displayedNews.concat(nextBatch);
            this.remainingNews = this.newsList.slice(this.displayedNews.length);
        }
    }
};
</script>