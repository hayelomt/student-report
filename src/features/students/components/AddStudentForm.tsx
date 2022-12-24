import { Button, Grid, Group, Select, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useStudentFormController } from '../hooks/useStudentFormController';

const AddStudentForm = () => {
  const { form, createStudent } = useStudentFormController();

  return (
    <>
      <form onSubmit={form.onSubmit((values) => createStudent(values))}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              withAsterisk
              placeholder="First Name"
              label="First Name"
              {...form.getInputProps('first_name')}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              placeholder="Mid Name (father's name)"
              label="Mid Name"
              {...form.getInputProps('mid_name')}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          mt="md"
          placeholder="Last Name(grand father's name)"
          label="Last Name"
          {...form.getInputProps('last_name')}
        />

        <Grid mt="md">
          <Grid.Col span={6}>
            <Select
              label="Gender"
              placeholder="gender"
              data={[
                { label: 'Female', value: 'female' },
                { label: 'Male', value: 'male' },
              ]}
              {...form.getInputProps('gender', { type: 'input' })}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <DatePicker
              label="Date of birth"
              value={form.values.dob}
              onChange={(val) => form.setFieldValue('dob', val)}
            />
          </Grid.Col>
        </Grid>

        <Group position="right" mt="xl">
          <Button type="submit">Create</Button>
        </Group>
      </form>
    </>
  );
};

export default AddStudentForm;
