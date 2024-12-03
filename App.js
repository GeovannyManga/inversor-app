import { StatusBar as Status } from 'expo-status-bar';
import { StyleSheet, View, StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./Navigation/MainStack.js";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
      <Status style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
