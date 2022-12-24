import create from 'zustand';
import { FormModes } from '../../../core/util/types';
import { StudentCreate } from '../models/student';

type StudentFormState = {
  student: StudentCreate;
  mode: FormModes;
  formTitle: string;
  formStep: 'student' | 'grade';
};

type StudentFormAction = {
  setStudent: (student: StudentCreate) => void;
  setMode: (mode: FormModes) => void;
  setGradeForm: () => void;
};

const initialState: StudentFormState = {
  student: {
    first_name: '',
    last_name: '',
    mid_name: '',
    dob: null,
    gender: '',
  },
  mode: 'create',
  formTitle: 'Register Student',
  formStep: 'student',
};

const useStudentFormState = create<StudentFormState & StudentFormAction>()(
  (set) => ({
    ...initialState,

    setStudent(student) {
      set({ student });
    },

    setMode(mode) {
      set({ mode });
    },

    setGradeForm() {
      set({ formStep: 'grade' });
    },
  })
);

export default useStudentFormState;
