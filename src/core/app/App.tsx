import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useThemeToggle } from '../ui/theme/hooks/useThemeToggle';
import AppRoutes from './AppRoutes';

export default function App() {
  const { colorScheme, toggleColorScheme } = useThemeToggle();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: colorScheme }}
      >
        <NotificationsProvider>
          <AppRoutes />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
