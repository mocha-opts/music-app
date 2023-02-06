import React, { useReducer, useMemo, useCallback, lazy, Suspense } from 'react';
import request from './utils/request';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

import { IconStyle } from './assets/font/iconfont';
import Layout from './components/Layout';
import RecoilProvider from './components/providers/RecoilProvider';
import QueryProvider from './components/providers/QueryProvider';
import { ConfigProvider, message } from 'antd';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <BrowserRouter>
      <QueryProvider>
        <RecoilProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#00b96b'
              }
            }}
          >
            <Suspense fallback={null}>
              <GlobalStyle />
              <IconStyle />
              <Layout>
                <Router />
              </Layout>
            </Suspense>
            <ReactQueryDevtools initialIsOpen />
          </ConfigProvider>
        </RecoilProvider>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
