import create from 'zustand';
import { Factories } from '../../../../core/app/factories';
import { Student } from '../models/student';

type StudentsState = {
  students: Student[];
  loading: boolean;
};

type StudentsAction = {
  setStudents: (students: Student[]) => void;
  addStudent: (student: Student) => void;
  updateStudent: (id: string, student: Student) => void;
  loadStudents: () => void;
};

const initialState: StudentsState = {
  students: [],
  loading: false,
};

const studentService = Factories.getStudentService();

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

    async loadStudents() {
      set({ loading: true });

      const data = await studentService.findAll();

      set({ loading: false, students: data });
    },
  })
);

export default useStudentsState;
