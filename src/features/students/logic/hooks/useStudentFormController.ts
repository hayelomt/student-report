import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import shallow from 'zustand/shallow';
import { Factories } from '../../../../core/app/factories';
import { validateRules, Validator } from '../../../../core/services/validation';
import { StudentCreate } from '../models/student';
import useStudentFormState from '../states/useStudentFormState';
import useStudentsState from '../states/useStudentsState';

export const useStudentFormController = () => {
  const [setGradeForm] = useStudentFormState(
    (state) => [state.setGradeForm],
    shallow
  );
  const [addStudent] = useStudentsState((state) => [state.addStudent], shallow);
  const studentService = Factories.getStudentService();

  const form = useForm<StudentCreate>({
    initialValues: {
      first_name: '',
      mid_name: '',
      last_name: '',
      gender: '',
      dob: null,
      grade_id: null,
    },
    validate: {
      first_name: (val) =>
        validateRules([
          Validator.isString('first name', val),
          Validator.isNotEmpty('first name', val),
        ]),
      mid_name: (val) => validateRules([Validator.isString('mid name', val)]),
      last_name: (val) => validateRules([Validator.isString('last name', val)]),
    },
  });

  const createStudent = async (values: StudentCreate) => {
    const {
      data: student,
      mode,
      error,
    } = await studentService.createStudent(values);

    if (mode === 'error') {
      showNotification({
        title: 'Student could not be created',
        message: error,
        color: 'red',
      });
      return;
    }

    addStudent(student);
    setGradeForm();
    showNotification({
      title: 'Success',
      message: 'Student added successfully',
    });
  };

  return { form, createStudent };
};
