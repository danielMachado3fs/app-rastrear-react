import React, { useState } from "react";
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

import { useNavigation, useRoute } from "@react-navigation/native";
import ChecklistIcon from "../../../assets/checklist_icon.svg";
import TicketIcon from "../../../assets/ticket_icon.svg";
import { TicketWidget } from "../../components/TicketWidget";
interface Params {
  user: any;
}

export function Home() {
  const theme = useTheme();
  const [vehicle, setVehicle] = useState({});
  const { navigate } = useNavigation();
  const route = useRoute();
  const { user } = route.params as Params;

  const handleStartCheckList = (user: any) => {
    navigate("startCheckList", { user, vehicle });
  };

  return (
    <>
      <Header user={user} />
      <Container>
        <MyVehiclesTitle>Meus veiculos</MyVehiclesTitle>
        <CarSlider onData={setVehicle}/>
        <WidgetContainer>
          <View style={{ width: "48%" }}>
            <Button
              IconSVG={<ChecklistIcon />}
              title="Realizar Checklist"
              color={theme.colors.button_color}
              onPress={() => {
                handleStartCheckList(user);
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
