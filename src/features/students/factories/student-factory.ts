import { v4 } from 'uuid';
import { Student, StudentCreate, StudentResponse } from '../models/student';

export const StudentFactory = {
  fromResponse: (student: StudentResponse): Student => {
    return new Student({ ...student });
  },

  fromFormPayload: (student: StudentCreate): Student => {
    return new Student({
      id: v4(),
      ...student,
      dob: student.dob?.toISOString() || null,
    });
  },
};
