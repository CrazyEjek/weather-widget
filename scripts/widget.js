import { startWidget } from './modules/widgetService.js';
import {cityServicesSearch} from './modules/cityServicesSearch.js';

const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget);

cityServicesSearch(widget);
};

initWidget (document.querySelector('#app'));