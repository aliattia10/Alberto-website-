import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 5173,
        host: '0.0.0.0',
        allowedHosts: [
          'devserver-main--sensational-horse-72e431.netlify.app',
          '.netlify.app',
          '.ngrok.io',
          '.ngrok-free.app',
        ],
        proxy: {
          '/graphql': { target: 'http://localhost:4001', changeOrigin: true, ws: true },
          '/@vite': { target: 'http://localhost:4001', changeOrigin: true, ws: true },
          '/@react-refresh': { target: 'http://localhost:4001', changeOrigin: true },
          '^/src/': { target: 'http://localhost:4001', changeOrigin: true },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
