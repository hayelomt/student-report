import { Button, Drawer, Group, Text } from '@mantine/core';
import { useState } from 'react';
import Layout from '../../../core/ui/layout/Layout';
import GradeForm from '../components/GradeForm';
import GradeList from '../components/GradeList';
import { useLoadGrades } from '../hooks/useLoadGrades';

const GradesListPage = () => {
  useLoadGrades();

  const [createOpen, setCreateOpen] = useState(false);

  return (
    <>
      <Layout>
        <Group mb="lg" position="apart">
          <Text size="xl">Grades</Text>
          <Button size="xs" onClick={() => setCreateOpen(true)}>
            Add Grade
          </Button>
        </Group>

        <GradeList onEdit={() => setCreateOpen(true)} />
      </Layout>

      <Drawer
        opened={createOpen}
        onClose={() => setCreateOpen(false)}
        title=""
        padding="xl"
        size="lg"
        position="right"
      >
        <GradeForm onClose={() => setCreateOpen(false)} />
      </Drawer>
    </>
  );
};

export default GradesListPage;
