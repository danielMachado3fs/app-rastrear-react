import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import {
  Container,
  MyVehiclesTitle,
  TicketTitle,
  Widget,
  WidgetContainer
} from "./styles";

import { Button } from "../../components/Button";
import CarSlider from "../../components/CarSlider";

import ChecklistIcon from "../../../assets/checklist_icon.svg";
import TicketIcon from "../../../assets/ticket_icon.svg";
import { TicketWidget } from "../../components/TicketWidget";

export function Home() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <CarSlider />
      <Container>
        <MyVehiclesTitle>Meus veiculos</MyVehiclesTitle>
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
    </>
  );
}
