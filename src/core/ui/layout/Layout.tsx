import { AppShell, Navbar, Text, Group } from '@mantine/core';
import { ReactNode } from 'react';
import { IconBuildingArch, IconUsers } from '@tabler/icons';
import ThemeToggle from '../theme/ThemToggle';
import SidebarLink from './components/SidebarLink';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height="100%" p="xs">
            <Navbar.Section>
              <Text size="md" py="md">
                Header
              </Text>
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <SidebarLink
                to="/grades"
                label="Grades"
                icon={<IconBuildingArch size={18} />}
              />

              <SidebarLink
                to="/students"
                label="Students"
                icon={<IconUsers size={18} />}
              />
            </Navbar.Section>
            <Navbar.Section>
              <Group position="apart">
                <Text>Footer</Text>

                <ThemeToggle />
              </Group>
            </Navbar.Section>
          </Navbar>
        }
        // header={
        //   <Header height={60} p="xs">
        //     {/* Header content */}
        //   </Header>
        // }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
