import shallow from 'zustand/shallow';
import { Button, Drawer, Group, Text } from '@mantine/core';
import { useState } from 'react';
import AddStudentForm from '../components/AddStudentForm';
import AssignStudentGradeForm from '../components/AssignStudentGradeForm';
import StudentsList from '../components/StudentsList';
import { useLoadStudents } from '../../logic/hooks/useLoadStudents';
import useStudentFormState from '../../logic/states/useStudentFormState';
import Layout from '../../../../core/ui/layout/Layout';

const StudentListPage = () => {
  useLoadStudents();

  const [createOpen, setCreateOpen] = useState(false);
  const [formStep] = useStudentFormState((state) => [state.formStep], shallow);

  return (
    <>
      <Layout>
        <Group position="apart" mb="md">
          <Text size="xl">Students</Text>
          <Button size="xs" onClick={() => setCreateOpen(true)}>
            Add Student
          </Button>
        </Group>

        <StudentsList />
      </Layout>

      <Drawer
        opened={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Register Student"
        padding="xl"
        size="xl"
        position="right"
      >
        {formStep === 'grade' ? (
          <AssignStudentGradeForm onClose={() => setCreateOpen(false)} />
        ) : (
          <AddStudentForm />
        )}
      </Drawer>
    </>
  );
};

export default StudentListPage;
