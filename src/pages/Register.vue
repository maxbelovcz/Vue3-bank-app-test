<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <section class="register">
                <div class="container">
                    <div class="register-wrapper">
                        <form class="register-form" @submit.prevent="submitForm">
                            <h2>РЕГИСТРАЦИЯ</h2>
                            <input type="text" name="name" id="register-name" v-model="formData.name" placeholder="Имя">
                            <input type="email" name="email" id="register-email" placeholder="Почта"
                                v-model="formData.email">
                            <input type="password" name="password" id="register-password"
                                placeholder="Введите пароль (не менее 7 символов)" v-model="formData.password">
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
import { sendFormData } from '../apiConfig';


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
                const data = await sendFormData(this.formData);
                alert('Successfully registered:', data);
            } catch (error) {
                alert('Error during registration:', error);
            }
        }
    }
}
</script>
