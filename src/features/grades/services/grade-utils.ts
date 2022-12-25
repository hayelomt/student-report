import { Grade } from '../models/grade';

export const GradeUtils = {
  sort: (grades: Grade[]) => [...grades].sort((a, b) => a.order - b.order),
};
