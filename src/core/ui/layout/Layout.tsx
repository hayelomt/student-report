import {
  AppShell,
  Navbar,
  Header,
  Text,
  Group,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem';
import { ReactNode } from 'react';
import { IconUser, IconUserCircle } from '@tabler/icons';
import { Link } from 'react-router-dom';
import ThemeToggle from './theme/ThemToggle';

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
              <UnstyledButton
                sx={(theme) => ({
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
                component={Link}
                to="/students"
              >
                <Group>
                  <ThemeIcon>
                    <IconUserCircle />
                  </ThemeIcon>

                  <Text size="sm">Students</Text>
                </Group>
              </UnstyledButton>
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
