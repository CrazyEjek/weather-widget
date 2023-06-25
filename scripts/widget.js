import { startWidget } from './modules/widgetService.js';
import { fetchWeather } from './modules/APIservice.js';


const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget);

    fetchWeather('Пермь');
}

initWidget (document.querySelector('#app'));