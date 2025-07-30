export const API_CONFIG = {
    BASE_URL: "/api/weather",
    GEO: "/api/geo",
    API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
    DEFAULT_PARAMS: {
      units: "metric",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    },
  };