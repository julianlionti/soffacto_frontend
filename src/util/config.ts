const Config = {
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  name: import.meta.env.VITE_APP_NAME,
  URL: import.meta.env.VITE_APP_URL,
};

export default Config;
