import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Loading } from './components';
import './styles/global.scss';

gsap.registerPlugin(ScrollTrigger);

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
