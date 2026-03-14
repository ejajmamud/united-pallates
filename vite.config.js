import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    root: "src",
    publicDir: false,
    server: {
        host: true
    },
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: resolve(__dirname, "src/index.html"),
                services: resolve(__dirname, "src/services.html"),
                products: resolve(__dirname, "src/products.html"),
                resources: resolve(__dirname, "src/resources.html"),
                about: resolve(__dirname, "src/about.html"),
                contact: resolve(__dirname, "src/contact.html"),
                article: resolve(__dirname, "src/article.html")
            }
        }
    }
});
