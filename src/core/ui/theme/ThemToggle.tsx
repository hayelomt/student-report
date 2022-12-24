import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <ActionIcon
        color={colorScheme === 'dark' ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle theme mode"
      >
        {colorScheme === 'dark' ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </>
  );
};

export default ThemeToggle;
