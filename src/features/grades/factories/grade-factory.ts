import { v4 } from 'uuid';
import { Grade, GradeAddEdit } from '../models/grade';

export const GradeFactory = {
  fromPayload: (data: GradeAddEdit) => {
    return new Grade({
      ...data,
      id: v4(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  },
};
