import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        dedupe: ['react', 'react-dom'],
        alias: {
            components: "/src/components",
            hooks: "/src/hooks",
            image: "/src/image",
            style: "/src/style",
            store: "/src/store",
            api: "/src/api",
            models: "/src/models",
        }
    },
});
