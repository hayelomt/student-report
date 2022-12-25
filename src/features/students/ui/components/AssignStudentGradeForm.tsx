import { Button, Grid, Group, Select } from '@mantine/core';

type AssignGradeProps = {
  onClose: () => void;
};

const AssignStudentGradeForm = ({ onClose }: AssignGradeProps) => {
  return (
    <>
      <form
      // onSubmit={form.onSubmit((values) => createStudent(values))}
      >
        <Grid mt="md">
          <Grid.Col span={6}>
            <Select
              label="Gender"
              placeholder="gender"
              data={[
                { label: 'Female', value: 'female' },
                { label: 'Male', value: 'male' },
              ]}
            />
          </Grid.Col>
        </Grid>

        <Group position="right" mt="xl">
          <Button type="submit">Assign</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </Group>
      </form>
    </>
  );
};

export default AssignStudentGradeForm;
