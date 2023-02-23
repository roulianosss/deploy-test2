import {defineConfig} from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                //chunks go to root of dist folder
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]",
                manualChunks: {
                    altaprofits: ["./src/altaprofits.scss", "./src/altaprofits.js"]
                }
            }
        }
    }
})