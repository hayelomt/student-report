import { OpRes } from '../../../../core/util/types';
import { Student, StudentCreate } from '../../models/student';

export interface StudentService {
  createStudent(student: StudentCreate): Promise<OpRes<Student>>;
}
