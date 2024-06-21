import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                // Add other file extensions as needed
            },
        },
    },
});
