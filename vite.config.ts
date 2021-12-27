import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    config({ path: ".env.production" });
  } else {
    config();
  }

  console.log(process.env.VITE_APP_URL);

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": { target: process.env.VITE_APP_URL },
      },
    },
  };
});
