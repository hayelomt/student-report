import { useEffect } from 'react';
import useStudentsState from '../states/useStudentsState';

export const useLoadStudents = () => {
  const loadStudents = useStudentsState((state) => state.loadStudents);

  useEffect(() => {
    loadStudents();
  }, []);
};
