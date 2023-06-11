import "./src/lib/dayjs"; //aplica a configuração do dayjs (pt-br) na aplicação toda
import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

// import { SignIn } from "./src/screens/SignIn";
import { ThemeProvider } from "styled-components";
import theme from "./src/core/styles/theme";
import { FontDisplay } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          OpenSans_300Light,
          OpenSans_400Regular,
          OpenSans_500Medium,
          OpenSans_600SemiBold,
          OpenSans_700Bold,
          OpenSans_800ExtraBold,
          Comfortaa_300Light,
          Comfortaa_400Regular,
          Comfortaa_500Medium,
          Comfortaa_600SemiBold,
          Comfortaa_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar
            style="auto"
            backgroundColor={theme.colors.background_secondary}
          />
          <Routes />
        </View>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E6EEF1",
  },
});
