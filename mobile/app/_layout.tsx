import '@/global.css';
import { SplashScreen, Stack } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

export {
  // Catch any errors thrown by the layout.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(root)/(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Cereal-Black': require('@/assets/fonts/airbnb-cereal-app-black.ttf'),
    'Cereal-Bold': require('@/assets/fonts/airbnb-cereal-app-bold.ttf'),
    'Cereal-Book': require('@/assets/fonts/airbnb-cereal-app-book.ttf'),
    'Cereal-Extrabold': require('@/assets/fonts/airbnb-cereal-app-extrabold.ttf'),
    'Cereal-Light': require('@/assets/fonts/airbnb-cereal-app-light.ttf'),
    'Cereal-Medium': require('@/assets/fonts/airbnb-cereal-app-medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontFamily: 'Cereal-Medium',
        },
      }}
    >
      <Stack.Screen name="(root)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(root)/(modals)"
        options={{
          headerShown: false,
          presentation: 'containedModal',
          animation: 'slide_from_bottom',
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
