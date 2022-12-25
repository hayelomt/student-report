import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import shallow from 'zustand/shallow';
import { Factories } from '../../../../core/app/factories';
import { validateRules, Validator } from '../../../../core/services/validation';
import { GradeAddEdit } from '../models/grade';
import useGradeFormState from '../states/useGradeFormState';
import useGradesState from '../states/useGradesState';

export const useGradeFormController = () => {
  const gradeService = Factories.getGradeService();
  const [grade, clear, mode, editId] = useGradeFormState(
    (state) => [state.grade, state.clear, state.mode, state.editId],
    shallow
  );
  const [addGrade, editGradeState] = useGradesState(
    (state) => [state.addGrade, state.editGrade],
    shallow
  );

  const form = useForm<GradeAddEdit>({
    initialValues: { ...grade },
    validate: {
      name: (val) =>
        validateRules([
          Validator.isString('name', val),
          Validator.isNotEmpty('name', val),
        ]),
    },
  });

  const createGrade = async (values: GradeAddEdit): Promise<boolean> => {
    const { mode, data, error } = await gradeService.createGrade(values);

    if (mode === 'error') {
      showNotification({
        title: 'Grade could not be created',
        message: error,
        color: 'red',
      });

      return false;
    }

    clear();
    addGrade(data);

    showNotification({
      title: 'Success',
      message: 'Grade added successfully',
    });

    return true;
  };

  const editGrade = async (values: GradeAddEdit): Promise<boolean> => {
    const { mode, data, error } = await gradeService.editGrade(editId!, values);

    if (mode === 'error') {
      showNotification({
        title: 'Grade update error',
        message: error,
        color: 'red',
      });

      return false;
    }

    clear();
    editGradeState(editId!, data);

    showNotification({
      title: 'Success',
      message: 'Grade edited successfully',
    });

    return true;
  };

  return { form, createGrade, mode, editGrade };
};
