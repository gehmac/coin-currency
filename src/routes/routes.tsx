import Home from 'pages/home';
import LoginPage from 'pages/login/login-page';
import { Route, Routes } from 'react-router-dom';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
