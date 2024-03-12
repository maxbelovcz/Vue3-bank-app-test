<template>
    <section class="clients-data">
        <div class="container">
            <div class="clients-data__wrapper">
                <h1>Данные клиента</h1>
                <form class="clients-data__form">
                    <input type="text" name="client-name" id="client-name" placeholder="Фамилия Имя Отчество">
                    <input type="text" name="client-age" id="client-age" placeholder="Возраст, полных лет">
                    <input type="text" name="client-address" id="client-address" placeholder="Адрес регистрации">
                    <input type="text" name="client-phone" id="client-phone" placeholder="Номер телефона">
                    <input type="text" name="client-inn" id="client-inn" placeholder="ИНН">
                    <input type="text" name="client-work" id="client-work" placeholder="Место работы">
                    <input type="text" name="client-employer" id="client-employer" placeholder="ИНН работодателя">
                    <input type="text" name="client-seniority" id="client-seniority"
                        placeholder="Общий трудовой стаж, полных лет">
                    <input type="text" name="client-seniority-last" id="client-seniority-last"
                        placeholder="Трудовой стаж на последнем месте, месяцев">
                    <input type="text" name="client-salary" id="client-salary"
                        placeholder="Среднемесячный доход за последние 6 месяцев">
                </form>
                <ButtonSave />
                <div class="credit-rating">Кредитный рейтинг</div>
                <onlineApp />
            </div>
        </div>
    </section>
</template>
<script>
import ButtonSave from '../components/ButtonSave.vue';
import onlineApp from '../components/onlineApp.vue';
export default {
    name: 'clientsData',
    components: { ButtonSave, onlineApp }
}
</script>