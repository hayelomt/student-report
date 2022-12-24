import { useEffect } from 'react';
import useGradesState from '../states/useGradesState';

export const useLoadGrades = () => {
  const loadGrades = useGradesState((state) => state.loadGrades);

  useEffect(() => {
    loadGrades();
  }, []);
};
