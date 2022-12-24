import create from 'zustand';
import { Student } from '../models/student';

type StudentsState = {
  students: Student[];
  loading: boolean;
};

type StudentsAction = {
  setStudents: (students: Student[]) => void;
  addStudent: (student: Student) => void;
  updateStudent: (id: string, student: Student) => void;
};

const initialState: StudentsState = {
  students: [],
  loading: false,
};

const useStudentsState = create<StudentsState & StudentsAction>()(
  (set, get) => ({
    ...initialState,

    setStudents(students) {
      set({ students });
    },

    addStudent(student) {
      set({ students: [student, ...get().students] });
    },

    updateStudent(id, student) {
      const curStudents = [...get().students];
      const index = curStudents.findIndex((i) => i.id === id);
      if (index !== -1) {
        curStudents[index] = student;
        set({ students: curStudents });
      }
    },
  })
);

export default useStudentsState;
