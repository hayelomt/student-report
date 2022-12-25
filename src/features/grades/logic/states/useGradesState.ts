import create from 'zustand';
import { Factories } from '../../../../core/app/factories';
import { Grade } from '../models/grade';
import { GradeUtils } from '../services/grade-utils';

type GradeState = {
  grades: Grade[];
  gradeCache: Record<string, Grade>;
  loading: boolean;
};

type GradeAction = {
  addGrade: (grade: Grade) => void;
  loadGrades: () => void;
  editGrade: (id: string, grade: Grade) => void;
};

const initialState: GradeState = {
  grades: [],
  gradeCache: {},
  loading: false,
};

const gradeService = Factories.getGradeService();

const useGradesState = create<GradeState & GradeAction>()((set, get) => ({
  ...initialState,

  addGrade(grade) {
    set({
      grades: GradeUtils.sort([grade, ...get().grades]),
      gradeCache: {
        ...get().gradeCache,
        [grade.id]: grade,
      },
    });
  },

  async loadGrades() {
    set({ loading: true });

    const grades = await gradeService.findAll();
    const gradeCache: Record<string, Grade> = grades.reduce(
      (a, b) => ({ ...a, [b.id]: b }),
      {}
    );

    set({ loading: false, grades: GradeUtils.sort(grades), gradeCache });
  },

  editGrade(id, grade) {
    const curGrades = [...get().grades];
    const index = curGrades.findIndex((i) => i.id === id);
    if (index !== -1) {
      curGrades[index] = grade;
      set({
        grades: GradeUtils.sort(curGrades),
        gradeCache: {
          ...get().gradeCache,
          [grade.id]: grade,
        },
      });
    }
  },
}));

export default useGradesState;
