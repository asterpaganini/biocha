import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="ListaChas" options={{ title: 'Lista de Chás' }} />
    </Stack>
  );
}
