<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <section class="news news-padding">
                <div class="container">
                    <div class="article-wrapper">
                        <article class="article" v-if="selectedNews && Object.keys(selectedNews).length > 0">
                            <h2 class="article-title">{{ selectedNews.title }}</h2>
                            <div class="article-body">
                                <div class="article-img"><img :src="selectedNews.img" alt=""></div>
                                <div class="article-text">{{ selectedNews.content }}</div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

  
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'News',
    components: {
        Header,
        Footer
    },
    setup() {
        const selectedNews = ref({});
        const store = useStore();
        const route = useRoute();
        const newsList = ref([]);

        const loadSingleNews = (newsId, newsList) => {
            console.log('Searching for news with id:', newsId);
            if (newsList.length > 0) {
                const foundNews = newsList.find(news => news.id === parseInt(newsId));
                console.log('Found news:', foundNews);
                return foundNews;
            } else {
                console.log('News list is empty.');
                return null;
            }
        };

        onMounted(async () => {
            const newsId = route.params.newsId;
            console.log('newsId:', newsId);
            await store.dispatch('fetchNews');
            newsList.value = store.getters.getNewsList;
            console.log('newsList:', newsList.value);

            if (newsList.value.length > 0) {
                const loadedNews = loadSingleNews(newsId, newsList.value);
                selectedNews.value = loadedNews;
                console.log('selectedNews:', selectedNews.value);
            }
        });

        return {
            newsList,
            selectedNews
        }
    }
}

</script>











  

