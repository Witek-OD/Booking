import axios from 'axios';

// Базовый URL вашего JSON-сервера
const API_BASE_URL = 'http://localhost:5000';

/**
 * Получение списка направлений.
 */
export const getDestinations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/destination`);
        return response.data;
    } catch (error) {
        console.error('Error fetching destinations:', error);
        throw error; // Можно пробросить ошибку для обработки в компонентах
    }
};

/**
 * Получение списка отелей.
 * @param {Object} payload - данные формы для отправки на сервер
 */
export const getHotels = async (payload) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/hotels`, payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};