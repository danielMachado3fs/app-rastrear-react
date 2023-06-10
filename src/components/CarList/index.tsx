import React from "react";
import Carousel from "react-native-snap-carousel";
import { FlatList, Image } from "react-native";
import {
  Container,
  CarName,
  CarInfo,
  LicensePlateContainer,
  LicensePlate,
  CarTypeContainer,
  CarType,
  Widget,
  ArrowBack,
  ArrowForward,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Dimensions } from "react-native";

const cars = [
  { id: 1, name: "caminhaoTeste", tipo: "Caminhao", placa: "abc123" },
  { id: 2, name: "caminhaoTeste", tipo: "Caminhao", placa: "abc123" },
  { id: 3, name: "caminhaoTeste", tipo: "Caminhao", placa: "abc123" },
];

export function CarList() {
  const theme = useTheme();

  return (
    <Container>
      <Carousel
        data={cars}
        useScrollView
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.88}
        renderItem={({ item }) => (
          <CarImageWrapper key={item.id}>
            <Image
              source={{
                uri: "https://www.atoscuritiba.com.br/wp-content/uploads/2021/09/consorcio-de-caminhao-em-curitiba.png",
              }}
              style={{ width: 200, height: 200 }}
            />
            {/* <CarName>Caminhao Tal</CarName>
            <CarInfo>
              <LicensePlateContainer>
                <MaterialCommunityIcons
                  name="car-info"
                  size={30}
                  color={theme.colors.text_detail}
                />
                <LicensePlate>KFL-5495</LicensePlate>
              </LicensePlateContainer>
              <CarTypeContainer>
                <MaterialCommunityIcons
                  name="truck"
                  size={30}
                  color={theme.colors.text_detail}
                />
                <CarType>Caminhao</CarType>
              </CarTypeContainer>
            </CarInfo> */}
          </CarImageWrapper>
        )}
      />

      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        horizontal
        data={cars}
        renderItem={() => (
          <CarImageWrapper>
            <Image
              source={{
                uri: "https://www.atoscuritiba.com.br/wp-content/uploads/2021/09/consorcio-de-caminhao-em-curitiba.png",
              }}
              style={{ width: 200, height: 200 }}
            />
            <CarName>Caminhao Tal</CarName>
            <CarInfo>
              <LicensePlateContainer>
                <MaterialCommunityIcons
                  name="car-info"
                  size={30}
                  color={theme.colors.text_detail}
                />
                <LicensePlate>KFL-5495</LicensePlate>
              </LicensePlateContainer>
              <CarTypeContainer>
                <MaterialCommunityIcons
                  name="truck"
                  size={30}
                  color={theme.colors.text_detail}
                />
                <CarType>Caminhao</CarType>
              </CarTypeContainer>
            </CarInfo>
          </CarImageWrapper>
        )}
      /> */}
    </Container>
  );
}
