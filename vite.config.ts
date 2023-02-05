import react from '@vitejs/plugin-react';
import { UserConfig, ConfigEnv } from 'vite';
import { join } from 'path';
// import reactRefresh from '@vitejs/plugin-react-refresh';
import http from 'http';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  let config;
  const commonConfig = {
    // plugins: [reactRefresh()],
    esbuild: {
      // jsxInject: `import React from 'react'`
    }
  };
  // DEV
  if (command === 'serve') {
    config = {
      root: './',
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '/@': srcRoot
        }
      },
      build: {
        outDir: join(srcRoot, '/dist'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        host: 'localhost',
        port: 8080,
        // origin: 'http://127.0.0.1:8080',

        proxy: {
          '/api': {
            target: 'http://netease-cloud-music-api-mocha-opts.vercel.app',
            changeOrigin: true,
            secure: false,
            agent: new http.Agent(),
            headers: {
              Referer: 'http://netease-cloud-music-api-mocha-opts.vercel.app'
            },
            rewrite: (path: string) => path.replace(/^\/api/, '')
          },
          '/socket.io': {
            target: 'http://example.com',
            changeOrigin: true,
            secure: false,
            ws: true,
            headers: {
              Referer: 'http://example.com'
            }
          }
        }
      },
      preview: {
        host: '0.0.0.0',
        port: 8080
        // https: true
      }
      // optimizeDeps: {
      //   exclude: ['path']
      // }
    };
  } else {
    // PROD
    config = {
      root: './',
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '/@': srcRoot
        }
      },
      build: {
        outDir: join(srcRoot, '/dist'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        host: 'localhost',
        port: 8080,
        // origin: 'http://127.0.0.1:8080',
        cors: true,
        proxy: {
          '/api': {
            target: 'https://netease-cloud-music-api-mocha-opts.vercel.app',
            changeOrigin: true,
            secure: false,
            headers: {
              Referer: 'https://netease-cloud-music-api-mocha-opts.vercel.app'
            },
            rewrite: (path: string) => path.replace(/^\/api/, '')
          },
          '/socket.io': {
            target: 'http://example.com',
            changeOrigin: true,
            secure: false,
            ws: true,
            headers: {
              Referer: 'http://example.com'
            }
          }
        }
      },
      optimizeDeps: {
        exclude: ['path']
      }
    };
  }
  return { ...commonConfig, ...config };
};
