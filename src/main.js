import { createApp } from 'vue'
import App from './App.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import router from './router'


const app = createApp(App);
app.component(Swiper);
app.component(SwiperSlide);
app.use(router);
app.mount('#app');
