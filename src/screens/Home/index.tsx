import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import {
  Container,
  MyVehiclesTitle,
  TicketTitle,
  Widget,
  WidgetContainer,
} from "./styles";

import { Button } from "../../components/Button";
import CarSlider from "../../components/CarSlider";

import { useNavigation } from "@react-navigation/native";
import ChecklistIcon from "../../../assets/checklist_icon.svg";
import TicketIcon from "../../../assets/ticket_icon.svg";
import { TicketWidget } from "../../components/TicketWidget";

export function Home() {
  const { navigate } = useNavigation();
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container>
        <MyVehiclesTitle>Meus veiculos</MyVehiclesTitle>
        <CarSlider />
        <WidgetContainer>
          <View style={{ width: "48%" }}>
            <Button
              IconSVG={<ChecklistIcon />}
              title="Realizar Checklist"
              color={theme.colors.button_color}
              onPress={() => {
                navigate("startCheckList");
              }}
              disabled={false}
              height={80}
              padding={8}
            />
          </View>
          <View style={{ width: "48%" }}>
            <Button
              IconSVG={<TicketIcon />}
              title="Solicitar Ticket"
              color={theme.colors.button_color}
              onPress={() => {}}
              disabled={false}
              height={80}
              padding={8}
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
