import { Button, Drawer, Group, Text } from '@mantine/core';
import { useState } from 'react';
import Layout from '../../../../core/ui/layout/Layout';
import Loaders from '../../../../core/ui/shared/loaders';
import { useLoadGrades } from '../../logic/hooks/useLoadGrades';
import useGradesState from '../../logic/states/useGradesState';
import GradeForm from '../components/GradeForm';
import GradeList from '../components/GradeList';

const GradesListPage = () => {
  useLoadGrades();

  const [createOpen, setCreateOpen] = useState(false);
  const loading = useGradesState((state) => state.loading);

  return (
    <>
      <Layout>
        <Group mb="lg" position="apart">
          <Text size="xl">Grades</Text>
          <Button size="xs" onClick={() => setCreateOpen(true)}>
            Add Grade
          </Button>
        </Group>

        <Loaders.Linear loading={loading} />
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
