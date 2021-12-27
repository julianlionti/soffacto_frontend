import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

config();

console.log(process.env.VITE_APP_URL);

export default defineConfig(() => ({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: process.env.VITE_APP_URL },
    },
  },
}));
