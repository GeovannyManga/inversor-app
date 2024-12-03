import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainList from "../views/MainList.js";
import Details from "../views/Details.js";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        animation: 'slide_from_right', 
        cardStyleInterpolator: ({ current, next, layouts }) => {
        
          return {
            cardStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen name="Home" component={MainList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default MainStack;
