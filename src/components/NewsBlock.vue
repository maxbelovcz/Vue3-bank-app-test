<template>
  <div class="news-top">
    <h2 class="news-title">{{ newsTitle }}</h2>
  </div>
  <div class="news-block">
    <div class="news-item" v-for="news in newsList" :key="news.id">
      <div class="news__img">
        <img :src="news.img" alt>
      </div>
      <div class="news-item__body">
        <div class="news-item__title">{{ news.title }}</div>
        <div class="news-item__text">
          <p>{{ news.preview_text }}</p>
        </div>
      </div>
      <router-link :to="'/news/' + news.id">Читать далее</router-link>
    </div>
  </div>
  <ButtonShowMore v-if="showButton" @click="fetchMoreNews" />
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import ButtonShowMore from './ButtonShowMore.vue';

export default {
  name: 'news-block',
  components: { ButtonShowMore },
  setup() {
    const newsTitle = ref('Полезные статьи');
    const newsList = ref([]);
    const store = useStore();
    const showButton = ref(true);

    const fetchMoreNews = async () => {
      try {
        await store.dispatch('fetchNews');
        newsList.value = store.getters.getNewsList;
        showButton.value = store.getters.getShowButton;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchMoreNews();
    });

    return { newsTitle, newsList, showButton, fetchMoreNews };
  }
}
</script>
