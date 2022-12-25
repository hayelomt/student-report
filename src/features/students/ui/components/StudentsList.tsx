import { ActionIcon, Table } from '@mantine/core';
import { IconEditCircle } from '@tabler/icons';
import useStudentsState from '../../logic/states/useStudentsState';

const StudentsList = () => {
  const students = useStudentsState((state) => state.students);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td></td>
              <td></td>
              <td>
                <ActionIcon onClick={() => {}}>
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

export default StudentsList;
