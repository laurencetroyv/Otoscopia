import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screening from './Screening';

function DashboardComponent() {
  return null;
}

function ScreeningComponent() {
  return <Screening />;
}

function EMRComponent() {
  return null;
}

export default function AppNavigation() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Dashboard" component={DashboardComponent} />
      <Tab.Screen name="Screening" component={ScreeningComponent} />
      <Tab.Screen name="EMR" component={EMRComponent} />
    </Tab.Navigator>
  );
}
