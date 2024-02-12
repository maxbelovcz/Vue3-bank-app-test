<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <section class="register">
                <div class="container">
                    <div class="register-wrapper">
                        <form class="register-form" @submit.prevent="submitForm">
                            <h2>РЕГИСТРАЦИЯ</h2>
                            <input type="text" name="name" id="register-name" v-model="formData.name">
                            <input type="email" name="email" id="register-email" placeholder="Почта"
                                v-model="formData.email">
                            <input type="password" name="password" id="register-password" placeholder="Введите пароль"
                                v-model="formData.password">
                            <input type="password" name="password_confirmation" id="password_confirmation"
                                placeholder="Повторите пароль" v-model="formData.password_confirmation">
                            <button type="submit">Зарегистрироваться</button>
                        </form>
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


export default {
    name: 'Register',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('http://laravel.test-work.tech/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Успешно зарегистрирован:', data);
                    // Дополнительные действия после успешной регистрации
                } else {
                    console.error('Ошибка при регистрации:', response.statusText);
                    // Обработка ошибки при регистрации
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
                // Обработка ошибки при отправке запроса
            }
        }
    }
}
</script>
