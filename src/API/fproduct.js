const BASE_URL = 'http://localhost/furn/api';

export const Fproduct = async () => {
    try {
        const response = await fetch(`${BASE_URL}/fproduct.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching fproducts data: ${error.message}`);
    }
};
