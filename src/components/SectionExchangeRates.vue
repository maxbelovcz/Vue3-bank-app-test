<template>
    <section class="exchange-rates">
        <div class="container">
            <div class="exchange-rates__wrapper">
                <div class="exchange-rates__rates">
                    <h2>Курс валют</h2>
                    <table class="rates">
                        <thead>
                            <th>{{ columns[0].columnTitle }}</th>
                            <th>{{ columns[1].columnTitle }}</th>
                            <th>{{ columns[2].columnTitle }}</th>
                        </thead>
                        <tr>
                            <td>{{ row1[0].tdText }}</td>
                            <td>{{ row1[1].tdText }}</td>
                            <td>{{ row1[2].tdText }}</td>
                        </tr>
                        <tr>
                            <td>{{ row2[0].tdText }}</td>
                            <td>{{ row2[1].tdText }}</td>
                            <td>{{ row2[2].tdText }}</td>
                        </tr>
                    </table>
                    <a href="/currencyExchange">Все курсы</a>
                </div>
                <div class="exchange-rates__img">
                    <img src="/img/bank-img2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'section-exchange-rates',
    data() {
        return {
            columns: [
                {
                    id: 'th1',
                    columnTitle: 'Валюта',
                },
                {
                    id: 'th2',
                    columnTitle: 'Продать',
                },
                {
                    id: 'th3',
                    columnTitle: 'Купить',
                },
            ],
            row1: [
                {
                    id: 'td1',
                    tdText: 'EUR',
                },
                {
                    id: 'td2',
                    tdText: '00,00',
                },
                {
                    id: 'td3',
                    tdText: '00,00',
                },
            ],
            row2: [
                {
                    id: 'td1',
                    tdText: 'USD',
                },
                {
                    id: 'td2',
                    tdText: '00,00',
                },
                {
                    id: 'td3',
                    tdText: '00,00',
                },
            ],
        };
    },
};
</script>
  