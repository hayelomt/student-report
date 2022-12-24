import shallow from 'zustand/shallow';
import { Button, Drawer, Group, Text } from '@mantine/core';
import { useState } from 'react';
import Layout from '../../../core/ui/layout/Layout';
import AddStudentForm from '../components/AddStudentForm';
import AssignStudentGradeForm from '../components/AssignStudentGradeForm';
import useStudentFormState from '../states/useStudentFormState';

const StudentListPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const [formStep] = useStudentFormState((state) => [state.formStep], shallow);

  return (
    <>
      <Layout>
        <Group position="apart">
          <Text size="xl">Students</Text>
          <Button size="xs" onClick={() => setCreateOpen(true)}>
            Add Student
          </Button>
        </Group>
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
