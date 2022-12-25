import { OpRes } from '../../../../../core/util/types';
import { Student, StudentCreate } from '../../models/student';

export interface StudentService {
  findAll(): Promise<Student[]>;

  createStudent(student: StudentCreate): Promise<OpRes<Student>>;
}
