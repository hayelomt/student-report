import { ActionIcon, Table } from '@mantine/core';
import { IconEditCircle } from '@tabler/icons';
import { DateUtils } from '../../../../core/util/date-utils';
import useGradeFormState from '../../logic/states/useGradeFormState';
import useGradesState from '../../logic/states/useGradesState';

type GradeListProps = {
  onEdit: () => void;
};

const GradeList = ({ onEdit }: GradeListProps) => {
  const grades = useGradesState((state) => state.grades);
  const setEdit = useGradeFormState((state) => state.setEdit);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Order</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.name}</td>
              <td>{grade.order}</td>
              <td>{DateUtils.parseElapsed(grade.created_at)}</td>
              <td>{DateUtils.parseElapsed(grade.updated_at)}</td>
              <td>
                <ActionIcon
                  onClick={() => {
                    setEdit(grade.id, grade);
                    onEdit();
                  }}
                >
                  <IconEditCircle size={18} />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default GradeList;
