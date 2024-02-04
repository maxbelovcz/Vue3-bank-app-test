<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-body">
                    <div class="contacts">
                        <Logo></Logo>
                        <div class="contacts__title">Контакты</div>
                        <div class="contacts__body">
                            <div class="contacts__item">{{ contacts[0].address }}</div>
                            <div class="contacts__item"><a href="tel/:+79991234567">{{ contacts[1].phone }}</a></div>
                            <div class="contacts__item"><a href="https://vk.com/">{{ contacts[2].social }}</a></div>
                            <div class="contacts__item"><a href="#">{{ contacts[3].link }}</a></div>
                        </div>
                    </div>
                    <form class="feedback" id="feedback-form">
                        <div class="feedback__title">Получить консультацию</div>
                        <div class="feedback__body">
                            <input type="text" name="name" id="name" placeholder="Фамилия Имя Отчество">
                            <input type="text" name="phone" id="phone" placeholder="Телефон">
                            <input type="text" name="email" id="email" placeholder="Email">
                            <select name="consultations" id="consultations">
                                <option value="" selected hidden>Тема консультации</option>
                                <option value="credits">Кредиты</option>
                                <option value="mortgage">Ипотека</option>
                                <option value="deposits">Вклады</option>
                                <option value="currencyExchange">Обмен валют</option>
                            </select>
                        </div>
                        <ButtonSubmit></ButtonSubmit>
                    </form>
                </div>
                <div class="copyright">© {{ copyright }}</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue';
import ButtonSubmit from './ButtonSubmit.vue';


export default {
    name: 'main-footer',
    components: {
        Logo,
        ButtonSubmit
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
            copyright: '2023 АО «Банк». Генеральная лицензия Банка России № 0000 от 17.02.2015г.'

        }
    }
}
</script>
