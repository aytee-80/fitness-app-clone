import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
export default function RootLayout() {
  return (
    <Stack>
      <Stack screenOptions={{ headerTitleAlign: "center" , headerTintColor : "#fff" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
    </Stack>
  );
}

const style = StyleSheet.create({
  header: {

  }
})
