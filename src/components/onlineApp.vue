<template>
    <div class="online-application">
        <h2>Онлайн-заявка</h2>
        <form class="online-application__form">
            <div class="online-application__details">
                <select name="products-type" id="products-type">
                    <option value="" selected hidden>Выберите продукт</option>
                    <option value="type-credit">Кредит</option>
                    <option value="type-mortgage">Ипотека</option>
                    <option value="type-exchange">Обмен валют</option>
                    <option value="type-deposit">Вклад</option>
                </select>
                <div class="interest-rate">Процентная ставка 15%</div>
                <input type="text" name="product-sum" id="product-sum" placeholder="Сумма, руб.">
                <input type="text" name="product-time" id="product-time" placeholder="Срок, мес.">
            </div>
            <div class="online-application__info">
                <a href="#">Подробные условия</a>
                <a href="#">Перечень необходимых документов</a>
            </div>
        </form>
        <buttonOnlineApp />
    </div>
</template>

<script>
import buttonOnlineApp from '../components/ButtonOnlineApp.vue';
export default {
    name: 'onlineApp',
    components: {
        buttonOnlineApp
    }
}

</script>