// pages/_app.tsx

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import {store} from '../store'; // import your Redux store
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> {/* Wrap all pages with Provider */}
      <Component {...pageProps} />
    </Provider>
  );
}
