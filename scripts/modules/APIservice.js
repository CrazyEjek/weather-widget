const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'dfb1c697d218de14f91d5ce000447e9b';

export const fetchWeather = async (city) => {
    try {  
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json();
        return { success: true, data }
    } catch (error) {
        return { success: false, error }
    }
};

export const fetchForecast = async (city) => {
    try {  
        const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json();
        return { success: true, data }
    } catch (error) {
        return { success: false, error }
    }
};

export const getCity = async () => {
    const url = 'https://ipapi.co/city/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ошибка получения данных города');
        }

        const city = await response.text();

        return { success: true, city }

    } catch (error) {
        console.error(error);
        return { success: false, error }
    }
}