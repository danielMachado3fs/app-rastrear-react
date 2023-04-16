import "./src/lib/dayjs"; //aplica a configuração do dayjs (pt-br) na aplicação toda
import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import { ThemeProvider } from "styled-components";
import theme from "./src/core/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Comfortaa_400Regular,
          Comfortaa_500Medium,
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
    <ThemeProvider theme={theme}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Routes />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
