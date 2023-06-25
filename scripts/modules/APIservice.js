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
    } catch (err) {
        return { success: false, err }
    }
}