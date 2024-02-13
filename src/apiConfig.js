import { apiList } from './apiConstants.js'

export const fetchSpecialsList = async () => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.specialEndpoint}`);
        return await response.json();
    } catch (error) {
        throw new Error('Ошибка получения данных', error);
    }
};
export const fetchNewsList = async (currentPage, apiList) => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.newsEndpoint}${currentPage}`);
        const jsonResponse = await response.json();

        if (jsonResponse && jsonResponse.data && Array.isArray(jsonResponse.data)) {
            const lastPage = jsonResponse.meta.last_page;
            return { data: jsonResponse.data, currentPage, lastPage };
        } else {
            throw new Error('Неверный формат данных получен с сервера');
        }
    } catch (error) {
        throw new Error('Ошибка получения данных: ' + error.message);
    }
};


export const sendFormData = async (formData) => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.register}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Ошибка во время регистрации:');
        }

        const responseData = await response.json();
        alert('Регистрация прошла успешно');

        return responseData;
    } catch (error) {
        throw new Error('Ошибка отправки запроса:');
    }
};






