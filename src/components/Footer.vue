<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-body">
                    <div class="contacts">
                        <Logo />
                        <div class="contacts__title">Контакты</div>
                        <div class="contacts__body">
                            <div class="contacts__item">{{ contacts[0].address }}</div>
                            <div class="contacts__item"><a href="tel/:+79991234567">{{ contacts[1].phone }}</a></div>
                            <div class="contacts__item"><a href="https://vk.com/">{{ contacts[2].social }}</a></div>
                            <div class="contacts__item"><a href="#">{{ contacts[3].link }}</a></div>
                        </div>
                    </div>
                    <FeedbackForm />
                </div>
                <div class="copyright">© {{ copyright }}</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue';
import FeedbackForm from './FeedbackForm.vue';

export default {
    name: 'main-footer',
    components: {
        Logo,
        FeedbackForm
    },
    data() {
        return {
            contacts: [
                {
                    id: '1',
                    address: '119002, Москва, пл. Смоленская-Сенная, д. 28.'
                },
                {
                    id: '2',
                    phone: '+7 (999) 123-45-67'
                },
                {
                    id: '3',
                    social: 'Мы ВКонтакте'
                },
                {
                    id: '4',
                    link: 'Лицензии и нормативные документы'
                },

            ],
            copyright: '2024 АО «Банк». Генеральная лицензия Банка России № 0000 от 17.02.2015г.'

        }
    }
}
</script>
