import Home from 'pages/home';
import { Route, Routes } from 'react-router-dom';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default Router;
