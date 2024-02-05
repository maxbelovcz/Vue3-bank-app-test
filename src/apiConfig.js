import { apiList } from './apiConstants.js'

export const fetchSpecialsList = async () => {
    try {
        const response = await fetch(`${apiList.apiUrl}${apiList.specialEndpoint}`);
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching data', error);
    }
};
