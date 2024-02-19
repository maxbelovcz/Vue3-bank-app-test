<template>
    <div class="wrapper">
        <Header />
        <main class="page">
            <section class="login">
                <div class="container">
                    <div class="login-wrapper">
                        <form class="login-form" @submit.prevent="login">
                            <h2>Вход</h2>
                            <input type="email" name="email" id="login-email" placeholder="Почта" v-model="formLogin.email">
                            <input type="password" name="password" id="login-password"
                                placeholder="Введите пароль (не менее 7 символов)" v-model="formLogin.password">
                            <button type="submit">Войти</button>
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
    name: 'Login',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            formLogin: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch('loginUser', { email: this.formLogin.email, password: this.formLogin.password });
                this.formLogin.email = '';
                this.formLogin.password = '';
                this.error = null;

                if (localStorage.getItem('accessToken')) {
                    this.$router.push({ name: 'onlineBank' });
                }
            } catch (error) {
                if (error.message === 'Ошибка во время авторизации') {
                    this.error = 'Неверный email или пароль. Пожалуйста, попробуйте снова.';
                } else {
                    console.error('Ошибка авторизации:', error);
                    this.error = 'Произошла ошибка при авторизации. Пожалуйста, попробуйте позже.';
                }
                this.formLogin.email = '';
                this.formLogin.password = '';
            }
        }

    }

}
</script>
