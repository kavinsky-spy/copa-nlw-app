import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, VStack } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor="fuchsia.400" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#FFF",
    fontSize: 24
  }
});
