
export const fetchSpecialsList = async () => {
    try {
        const response = await fetch('http://laravel.test-work.tech/api/special');
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching data', error);
    }
};
