import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/pages/HomePage';
import StudentListPage from '../../features/students/pages/StudentListPage';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
