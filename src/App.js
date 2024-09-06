import React from 'react'; //{ lazy }
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  SIGNIN,
  SIGNUP,
  NOTFOUND
} from './global/routes';

import LayoutWrapper from './components/LayoutWrapper';

import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import NotFound from './components/NotFound';

// Alternate Import Method
// const SingUp2 = lazy(() => import('./components/singup'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path={SIGNIN} element={<SingIn />} />
          <Route path={"/"} element={<Navigate to={SIGNIN} />} />

          <Route path={SIGNUP} element={<SingUp />} />

          <Route path={NOTFOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={NOTFOUND} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
