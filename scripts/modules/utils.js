export const getcurrentDataTime = () => {
    const months = [
        'янв',
        'фер',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];

    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ];

     const date = new Date();
     
     const dayOfMonth = date.getDate();
     const month = months [date.getMonth()];
     const year = date.getFullYear();
     const dayOfWeek = weekdays [date.getDay()];

     let hours = date.getHours();
     let minutes = date.getMinutes();

     if (hours < 10) {
        hours = `0${hours}`;
     }

     if (minutes < 10) {
        minutes = `0${minutes}`;
     }

    
     return {month, year, dayOfMonth, dayOfWeek, hours, minutes};
    
};

export const calculateDewPoint = (temp , humidity) => {
       
        const a = 17.27;
        const b = 237.7;

        const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
        const dewPoint = (b * ft) / (a - ft);
        return dewPoint.toFixed(1);
    };

export const convertPressure = (pressure) => {
    const mmHg = pressure * 0.750063755419211;
    return mmHg.toFixed(2);
}

export const getWeatherForecastData = (data) => {
    const forecast = data.list.filter(
        (item) => 
        new Date(item.dt_txt).getHours() === 12 &&
        // new Date(item.dt_txt).getDate() > new Date().getDate() &&
        new Date(item.dt_txt).getDate() < new Date().getDate() + 6,
        
    );

    const forecastData = forecast.map((item) => {
        const date = new Date(item.dt_txt);
        const weekdaysShort = [
                'вс',
                'пн',
                'вт',
                'ср',
                'чт',
                'пт',
                'сб',
            ];

            const dayOfWeek = weekdaysShort[date.getDay()];
            const weatherIcon = item.weather[0].icon;

            let minTemp = Infinity;
            let maxTemp = -Infinity;

            for (let i = 0; i < data.list.length; i++) {
                const temp = data.list[i].main.temp;
                const tempDate = new Date(data.list[i].dt_txt);

                if (tempDate.getDate() === date.getDate()) {
                    if (temp < minTemp) {
                        minTemp = temp;
                    } 
                    if (temp > maxTemp) {
                        maxTemp = temp;
                    }
                }
            }


        return {
            dayOfWeek,
            weatherIcon,
            minTemp,
            maxTemp,
        };
    });
    return forecastData;
};