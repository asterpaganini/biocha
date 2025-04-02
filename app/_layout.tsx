import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import 'react-native-reanimated';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';

// Evita que a splash screen seja fechada antes do carregamento
SplashScreen.preventAutoHideAsync();

const BOTTOM_NAVIGATION_HEIGHT = 70;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        {/* Pilha de navegação */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Barra de Navegação Inferior */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#2e7d32',
            paddingVertical: 10,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: BOTTOM_NAVIGATION_HEIGHT,
          }}
        >
          <NavButton icon="home" text="Início" onPress={() => router.push('/')} />
          <NavButton icon="search" text="Pesquisar" onPress={() => router.push('/Search')} />
          <NavButton icon="list" text="Lista" onPress={() => router.push('/ListaCha')} />
          <NavButton icon="information-circle" text="Sobre" onPress={() => router.push('/Sobre')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export const BottomNavigationHeight = BOTTOM_NAVIGATION_HEIGHT;

// Componente do botão de navegação com tipagem correta
function NavButton({ icon, text, onPress }: { icon: keyof typeof Ionicons.glyphMap; text: string; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
      <Ionicons name={icon} size={24} color="white" />
      <Text style={{ color: 'white', fontSize: 12 }}>{text}</Text>
    </TouchableOpacity>
  );
}

