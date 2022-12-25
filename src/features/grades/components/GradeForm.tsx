import { Button, Grid, Group, TextInput } from '@mantine/core';
import { useGradeFormController } from '../hooks/useGradeFormController';
import { GradeAddEdit } from '../models/grade';

type GradeFormProps = {
  onClose: () => void;
};

const GradeForm = ({ onClose }: GradeFormProps) => {
  const { form, createGrade, editGrade, mode } = useGradeFormController();

  const handleForm = async (data: GradeAddEdit) => {
    let success = false;
    console.log(mode);

    if (mode === 'create') {
      success = await createGrade(data);
    } else {
      success = await editGrade(data);
    }

    if (success) {
      onClose();
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleForm)}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              withAsterisk
              placeholder="Name"
              label="Name"
              {...form.getInputProps('name')}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <TextInput
              withAsterisk
              placeholder="Order"
              label="Order"
              type="number"
              {...form.getInputProps('order')}
            />
          </Grid.Col>
        </Grid>

        <Group position="right" mt="xl">
          {mode === 'create' ? (
            <Button type="submit">Create</Button>
          ) : (
            <>
              <Button type="submit">Edit</Button>
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
            </>
          )}
        </Group>
      </form>
    </>
  );
};

export default GradeForm;
