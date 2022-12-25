import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GradesListPage from '../../features/grades/ui/pages/GradesListPage';
import HomePage from '../../features/home/ui/pages/HomePage';
import StudentListPage from '../../features/students/ui/pages/StudentListPage';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grades" element={<GradesListPage />} />
          <Route path="/students" element={<StudentListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
