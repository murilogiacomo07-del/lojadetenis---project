import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Home from "./pages/home";
import Details from "./pages/details";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15}}>
                <Feather
                name="shopping-cart"
                size={24}
                color={"black"}
                
                />

              </TouchableOpacity>

            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
