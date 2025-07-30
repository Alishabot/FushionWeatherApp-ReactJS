export const API_CONFIG = {
    BASE_URL: "https://api.openweathermap.org/data/2.5",
    GEO: "https://api.openweathermap.org/geo/1.0",
    API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY || "b160ab641eb47cb01aba3d2164acf0ba",
    DEFAULT_PARAMS: {
      units: "metric",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY || "b160ab641eb47cb01aba3d2164acf0ba",
    },
  };