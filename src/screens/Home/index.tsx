import React from "react";
import { Text, Image, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Widget,
  MiniWidget,
  WidgetContainer,
  MyVehiclesTitle,
  CarInfo,
  LicensePlateContainer,
  LicensePlate,
  CarName,
  CarTypeContainer,
  CarType,
  TicketTitle,
} from "./styles";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";

import ItemSlide from "../../components/CarSlider";
import { Button } from "../../components/Button";

import ChecklistIcon from "../../../assets/checklist_icon.svg";
import TicketIcon from "../../../assets/ticket_icon.svg";
import { TicketWidget } from "../../components/TicketWidget";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <>
        <MyVehiclesTitle>Meus veiculos</MyVehiclesTitle>
        <ItemSlide />
      </>

      <WidgetContainer>
        <View style={{ width: "48%" }}>
          <Button
            IconSVG={<ChecklistIcon />}
            title="Realizar Checklist"
            color={theme.colors.button_color}
            onPress={() => {}}
            disabled={false}
          />
        </View>
        <View style={{ width: "48%" }}>
          <Button
            IconSVG={<TicketIcon />}
            title="Solicitar Ticket"
            color={theme.colors.button_color}
            onPress={() => {}}
            disabled={false}
          />
        </View>
      </WidgetContainer>
      <Widget>
        <TicketTitle>Tickets Recentes</TicketTitle>
        <TicketWidget />
      </Widget>
    </Container>
  );
}
