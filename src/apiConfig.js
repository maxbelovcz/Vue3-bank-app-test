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

        return responseData;
    } catch (error) {
        throw new Error('Ошибка отправки запроса:');
    }
};

export const login = async (email, password) => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.login}?email=${email}&password=${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Ошибка во время авторизации');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Ошибка отправки запроса:');
    }
};

export const submitForm = (name, phone, email, consultations) => {
    let url = `${apiList.apiUrl}${apiList.feedBack}?name=${name}&phone=${phone}`;

    url += `&email=${email}`;
    url += `&theme_consultation=${consultations}`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};




