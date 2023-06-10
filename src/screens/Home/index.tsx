import React from "react";
import { Text, Image, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Widget,
  MiniWidget,
  WidgetContainer,
  CarInfo,
  LicensePlateContainer,
  LicensePlate,
  CarName,
  CarTypeContainer,
  CarType,
} from "./styles";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import { CarList } from "../../components/CarList";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Header />

      <CarList />

      <WidgetContainer>
        <MiniWidget>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/913/913383.png",
            }}
            style={{ width: 40, height: 40 }}
          />
          <View
            style={{
              height: "100%",
              borderWidth: 0.5,
              borderColor: "white",
              margin: 10,
              borderRadius: 20,
            }}
          />
          <View>
            <Text style={{ color: "white" }}>Realizar</Text>
            <Text style={{ color: "white" }}>Checklist</Text>
          </View>
        </MiniWidget>
        <MiniWidget>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/913/913383.png",
            }}
            style={{ width: 40, height: 40 }}
          />
          <View
            style={{
              height: "100%",
              borderWidth: 0.5,
              borderColor: "white",
              margin: 10,
              borderRadius: 20,
            }}
          />
          <View>
            <Text style={{ color: "white" }}>Realizar </Text>
            <Text style={{ color: "white" }}>Checklist</Text>
          </View>
        </MiniWidget>
      </WidgetContainer>
      <Widget>
        <View
          style={{
            width: "100%",
            borderWidth: 0.5,
            borderColor: "black",
            margin: 10,
          }}
        />

        <Text>quadro 4</Text>
      </Widget>
    </Container>
  );
}
