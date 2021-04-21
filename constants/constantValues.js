export const dateFactor = 1000
export const enDateType = 'en-US'
export const ruDateType = 'ru-RU'

export const successCode = 200

export const tempPostfix = '°'
export const pressurePostfix = 'hPa'
export const speedPostfix = 'm/s'
export const humidityPostfix = '%'

export const languages = ['en', 'ru']

export const weatherOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}
export const forecastOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
}

export const dayPeriods = {
  night: 'Night',
  morning: 'Morning',
  day: 'Day',
  evening: 'Evening'
}

export const resources = {
  en: {
    translation: {
      Search: 'Search',
      Placeholder: 'Search for...',
      Forecast: 'Forecast',
      days1: 'days',
      days2: 'days',
      Night: 'Night',
      Day: 'Day',
      Morning: 'Morning',
      Evening: 'Evening',
      ForecastHeader: 'Forecast for {{count}} days in {{name}}',
      ForecastBack: 'Back to current weather',
      hPa: 'hPa',
      'm/s': 'm/s',
      addFavorites: 'Add city to favorites by clicking icon by near'
    }
  },
  ru: {
    translation: {
      Search: 'Поиск',
      Placeholder: 'Искать...',
      Forecast: 'Прогноз',
      days1: 'дня',
      days2: 'дней',
      Night: 'Ночь',
      Day: 'День',
      Morning: 'Утро',
      Evening: 'Вечер',
      ForecastHeader: 'Прогноз на {{count}} дней в {{name}}',
      ForecastBack: 'Вернуться к погоде',
      hPa: 'гПа',
      'm/s': 'м/с',
      addFavorites: 'Добавьте город в избранные нажав на иконку рядом'
    }
  }
}
