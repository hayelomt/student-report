import { StudentService } from '../../features/students/services/contracts/student-service';
import StudentServiceStorage from '../../features/students/services/student-service-storage';
import { StorageFactory } from '../services/storage/storage-factory';

export const Factories = {
  getStudentService: (): StudentService => {
    return new StudentServiceStorage(StorageFactory.create());
  },
};
