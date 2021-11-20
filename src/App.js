import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PublicRoute from './components/Routes/PublicRoute';
import Container from './components/Container';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './components/FormsUI/theme';

import ProtectedRoute from './components/Routes/ProtectedRoute';

import Statistics from './components/Statistics';
import HomeTab from "./components/HomeTab";
import Currency from "./components/Currency"

const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "home-view" */),
);
// const DiagramPage = lazy(() =>
//   import('./pages/DiagramPage' /* webpackChunkName: "diagram-view" */),
// );
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notFound-view" */),
);
// const ExcludePage = lazy(() =>
//   import('./pages/ExcludePage' /* webpackChunkName: "exclude-view" */),
// );

export default function App() {
  return (
    <Suspense
      fallback={
        <Loader
          type="ThreeDots"
          color="#8c91b3"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      }
    >
      <Routes>
        <Route
          exact
          path="/signup"
          restricted
          element={
            <Container>
              <ThemeProvider theme={theme}>
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              </ThemeProvider>
            </Container>
          }
        />
        <Route
          exact
          path="/login"
          restricted
          element={
            <Container>
              <ThemeProvider theme={theme}>
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              </ThemeProvider>
            </Container>
          }
        />

        <Route path="/" exact element={
          <ProtectedRoute >
            <DashboardPage />
          </ProtectedRoute>
        } >
          <Route path="home" index element={<HomeTab />} />
          <Route path="diagram" element={<Statistics />} />
          <Route exact path="exclude" element={<Currency />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        {/* <AddBtn /> */}
      </Routes>
      {/* <ModalComponent /> */}
    </Suspense>
  );
}
