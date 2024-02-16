<template>
    <form class="feedback" id="feedback-form" @submit.prevent="handleSubmit">
        <div class="feedback__title">{{ newsTitle }}</div>
        <div class="feedback__body">
            <input type="text" name="name" id="client-name" placeholder="Фамилия Имя Отчество" v-model="name">
            <input type="text" name="phone" id="client-phone" placeholder="Телефон" v-model="phone">
            <input type="text" name="email" id="client-email" placeholder="Email" v-model="email">
            <select name="consultations" id="client-consultations" v-model="consultations">
                <option value="" selected hidden>Тема консультации</option>
                <option value="credits">Кредиты</option>
                <option value="mortgage">Ипотека</option>
                <option value="deposits">Вклады</option>
                <option value="currencyExchange">Обмен валют</option>
            </select>
        </div>
        <ButtonSubmit></ButtonSubmit>
    </form>
</template>

<script>
import ButtonSubmit from './ButtonSubmit.vue';
import { ref } from 'vue';
import { submitForm } from '../apiConfig.js';

export default {
    name: 'FeedbackForm',
    components: {
        ButtonSubmit
    },
    setup() {
        const newsTitle = ref('Получить консультацию');
        const name = ref('');
        const phone = ref('');
        const email = ref('');
        const consultations = ref('');

        const handleSubmit = () => {
            console.log('submitForm is called');

            if (name.value !== '' && phone.value !== '') {
                submitForm(name.value, phone.value, email.value, consultations.value)
                    .then(response => {
                        if (response.ok) {
                            name.value = '';
                            phone.value = '';
                            email.value = '';
                            consultations.value = '';
                            return response.json();
                        }
                        throw new Error('Форма не отправлена');
                    })
                    .then(data => {
                        console.log(data);
                        alert('Заявка на консультацию принята');
                    })
                    .catch(error => {
                        console.error('Произошла ошибка:', error);
                    });
            } else {
                alert('Пожалуйста, заполните обязательные поля: Фамилия Имя Отчество и Телефон.');
            }
        };

        return { newsTitle, name, phone, email, consultations, handleSubmit };
    }
}

</script>
