import { apiList } from './apiConstants.js'

export const fetchSpecialsList = async () => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.specialEndpoint}`);
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching data', error);
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
            throw new Error('Invalid data format received from the server');
        }
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
    }
};




