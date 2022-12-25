import create from 'zustand';
import { Factories } from '../../../core/app/factories';
import { Grade } from '../models/grade';
import { GradeUtils } from '../services/grade-utils';

type GradeState = {
  grades: Grade[];
  loading: boolean;
};

type GradeAction = {
  addGrade: (grade: Grade) => void;
  loadGrades: () => void;
  editGrade: (id: string, grade: Grade) => void;
};

const initialState: GradeState = {
  grades: [],
  loading: false,
};

const gradeService = Factories.getGradeService();

const useGradesState = create<GradeState & GradeAction>()((set, get) => ({
  ...initialState,

  addGrade(grade) {
    set({ grades: GradeUtils.sort([grade, ...get().grades]) });
  },

  async loadGrades() {
    set({ loading: true });

    const grades = await gradeService.findAll();

    set({ loading: false, grades: GradeUtils.sort(grades) });
  },

  editGrade(id, grade) {
    const curGrades = [...get().grades];
    const index = curGrades.findIndex((i) => i.id === id);
    if (index !== -1) {
      curGrades[index] = grade;
      set({ grades: GradeUtils.sort(curGrades) });
    }
  },
}));

export default useGradesState;
