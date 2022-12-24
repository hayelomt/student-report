import { serviceExecutor } from '../../../core/services/serviceExecutor';
import { BrowserStorage } from '../../../core/services/storage/browser-storage';
import appConstants from '../../../core/util/constants';
import { OpRes } from '../../../core/util/types';
import { GradeFactory } from '../factories/grade-factory';
import { GradeAddEdit, Grade } from '../models/grade';
import { GradeService } from './contracts/grade-service';

export class GradeServiceStorage implements GradeService {
  constructor(private storage: BrowserStorage) {}

  async findAll(): Promise<Grade[]> {
    const grades = await this.storage.getItem<Grade[]>(
      appConstants.storageKeys.grades
    );

    return grades || [];
  }

  createGrade(data: GradeAddEdit): Promise<OpRes<Grade>> {
    return serviceExecutor(
      async () => {
        const grades = await this.findAll();
        const grade = GradeFactory.fromPayload(data);
        await this.storage.saveItem(appConstants.storageKeys.grades, [
          ...grades,
          grade,
        ]);

        return grade;
      },
      { source: 'GradeServiceStorage.createGrade' }
    );
  }

  editGrade(id: string, data: GradeAddEdit): Promise<OpRes<Grade>> {
    return serviceExecutor(
      async () => {
        const grades = await this.findAll();

        const grade = GradeFactory.fromPayload({ ...data });
        grade.id = id;

        const index = grades.findIndex((i) => i.id === id);
        if (index === -1) {
          throw new Error('Invalid state, could not edit grade');
        }
        grades[index] = grade;

        await this.storage.saveItem(appConstants.storageKeys.grades, grades);

        return grade;
      },
      { source: 'GradeServiceStorage.editGrade' }
    );
  }
}
