import Header from "@/components/header";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require("@/assets/fonts/Roboto.ttf"),
  });
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          header: () => <Header></Header>,
        }}
      ></Stack>
    </SafeAreaProvider>
  );
}
