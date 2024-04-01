import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingScreen from './screens/OnboardingScreen/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen';
import Services from './screens/Sevices/Services';
import ServiceDesription from './screens/Sevices/ServiceDesription';
import Loading from './screens/Loading/Loading';

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  useEffect(() => {
    firstLaunch();
  }, []);

  const firstLaunch = async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstlaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  };

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loading" component={Loading} />
          {isAppFirstLaunched && (
            <Stack.Screen
              name="onBoardingScreen"
              component={OnBoardingScreen}
            />
          )}
          <Stack.Screen name="homeScreen" component={HomeScreen} />
          <Stack.Screen name="services" component={Services} />
          <Stack.Screen
            name="serviceDescription"
            component={ServiceDesription}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
