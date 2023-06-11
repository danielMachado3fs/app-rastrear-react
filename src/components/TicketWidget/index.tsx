import React from "react";
import { Text, Animated, View } from "react-native";

import {
  Container,
  TicketItemContainer,
  TicketInfo,
  TicketName,
  TicketDate,
  TicketVehicle,
} from "./styles";

import { Feather, FontAwesome } from "@expo/vector-icons";
import { getStatusIcon } from "../../core/utils/getStatusIcon";
import { useTheme } from "styled-components";

interface TicketDTO {
  id: number;
  name: string;
  date: string;
  vehicle: string;
  status: string;
}

const tickets: TicketDTO[] = [
  {
    id: 1,
    name: "Nome Ticket1",
    date: "Sex, 25 Março 2023",
    vehicle: "caminaho",
    status: "pronto",
  },
  {
    id: 2,
    name: "Nome Ticket2",
    date: "Dom, 11 Julho 2023",
    vehicle: "volks",
    status: "aguardando",
  },
];

export function TicketWidget() {
  const theme = useTheme();
  return (
    <Container>
      <Animated.FlatList
        keyExtractor={item => item.id.toString()}
        data={tickets}
        renderItem={({ item, index }) => <TicketItem {...item} />}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
              backgroundColor: theme.colors.background_secondary,
            }}
          ></View>
        )}
      />
    </Container>
  );
}

function TicketItem({ id, name, date, vehicle, status }: TicketDTO) {
  const StatusImage = getStatusIcon(status);

  return (
    <TicketItemContainer>
      <TicketInfo>
        <TicketName>{name}</TicketName>
        <TicketDate>{date}</TicketDate>
        <TicketVehicle>{vehicle}</TicketVehicle>
      </TicketInfo>
      <StatusImage />
    </TicketItemContainer>
  );
}
