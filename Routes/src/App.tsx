import React from 'react';
import BaseRoutes from './Routing/routes';

export default function App() {
  return <BaseRoutes />;
}

// TO IMPLEMENT ROUTES IN REACT NATIVE APPLICATION
// FIRSTLY WE NEED TO INSTALL @react-navigation/native, @react-navigation/native-stack, react-native-screens AND react-native-safe-area-context AND THEN DECLARE Stack VARIABLE WITH INVOKING THE createNativeStackNavigator() CLASS.
// AND WE CAN TAKE navigation AS A PARAMETER FOR ALL THE SCREENS TO MOVE BETWEEN THE SCREENS.
