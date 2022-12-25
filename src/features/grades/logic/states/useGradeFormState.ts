import create from 'zustand';
import { FormModes } from '../../../../core/util/types';
import { Grade, GradeAddEdit } from '../models/grade';

type GradeState = {
  grade: GradeAddEdit;
  mode: FormModes;
  editId: string | null;
};

type GradeAction = {
  setGrade: (grade: Grade) => void;
  clear: () => void;
  setEdit: (id: string, grade: Grade) => void;
};

const initialState: GradeState = {
  grade: {
    name: '',
    order: 1,
  },
  mode: 'create',
  editId: null,
};

const useGradeFormState = create<GradeState & GradeAction>()((set) => ({
  ...initialState,

  setGrade(grade) {
    set({ grade });
  },

  clear() {
    set({ ...initialState });
  },

  setEdit(editId, grade) {
    set({ mode: 'edit', grade, editId });
  },
}));

export default useGradeFormState;
