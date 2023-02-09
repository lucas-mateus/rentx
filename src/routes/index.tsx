import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Home";
import { CarDetails } from "../Screens/CarDetails";
import { Schedule } from "../Screens/Schedule";
import { ScheduleDetails } from "../Screens/ScheduleDetails";
import { MyCars } from "../Screens/MyCars";
import { ScheduleConfirmation } from "../Screens/ScheduleConfirmation";

export function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CarDetails" component={CarDetails} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
          <Stack.Screen name="MyCars" component={MyCars} />
          <Stack.Screen
            name="ScheduleConfirmation"
            component={ScheduleConfirmation}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
