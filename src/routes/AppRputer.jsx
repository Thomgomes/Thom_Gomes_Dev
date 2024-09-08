import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page404 } from '../pages/404';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/404" element={<Page404 />} />
        {/* Página não encontrada */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
