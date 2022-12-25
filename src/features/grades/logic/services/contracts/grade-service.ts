import { OpRes } from '../../../../../core/util/types';
import { Grade, GradeAddEdit } from '../../models/grade';

export interface GradeService {
  findAll(): Promise<Grade[]>;

  createGrade(data: GradeAddEdit): Promise<OpRes<Grade>>;

  editGrade(id: string, data: GradeAddEdit): Promise<OpRes<Grade>>;
}
