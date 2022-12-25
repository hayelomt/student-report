import { serviceExecutor } from '../../../../core/services/serviceExecutor';
import { BrowserStorage } from '../../../../core/services/storage/browser-storage';
import appConstants from '../../../../core/util/constants';
import { OpRes } from '../../../../core/util/types';
import { StudentFactory } from '../factories/student-factory';
import { StudentCreate, Student, StudentResponse } from '../models/student';
import { StudentService } from './contracts/student-service';

class StudentServiceStorage implements StudentService {
  constructor(private storage: BrowserStorage) {}

  async findAll(): Promise<Student[]> {
    const res =
      (await this.storage.getItem<StudentResponse[]>(
        appConstants.storageKeys.students
      )) || [];

    return res.map(StudentFactory.fromResponse);
  }

  async createStudent(data: StudentCreate): Promise<OpRes<Student>> {
    return serviceExecutor(async () => {
      const students: Student[] = await this.findAll();

      const student = StudentFactory.fromFormPayload(data);
      students.push(student);
      await this.storage.saveItem(appConstants.storageKeys.students, students);

      return student;
    });
  }
}

export default StudentServiceStorage;
