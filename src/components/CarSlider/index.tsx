import React, { useEffect, useState } from "react";

import {
  Container,
  CurrentIndex,
  DescriptionPlate,
  Heading,
  ImageStyle,
  ItemStyle,
  PaginationContainer,
  TextContainer
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Animated,
  Dimensions,
  View
} from "react-native";
import { useTheme } from "styled-components";
import { IVehicle, TypesVehicles } from "../../core/types/common";
import { api } from "../../lib/axios";
import { Button } from "../Button";
import { Loading } from "../Loading";

const { width, height } = Dimensions.get("window");

interface Props {
  scrollX: Animated.Value;
  veiculosIds?: number[];
}

export interface IPropsItem extends Props {
  id: number;
  status: string;
  image: string;
  plate: string;
  type: TypesVehicles;
  index: number;
  model: string;
  yearManufacture: string;
  dateAcquisition: Date;
}

const Item = ({
  id,
  status,
  image,
  plate,
  type,
  index,
  model,
  yearManufacture,
  dateAcquisition,
  scrollX,
}: IPropsItem) => {
  const imageCar = `https://raw.githubusercontent.com/danielMachado3fs/app-rastrear-api/master/src/public/vehicles/${image.substring(
    image.lastIndexOf("/") + 1
  )}`;
  // const imageCar = `https://3.bp.blogspot.com/-tMVA26Fi3f4/UKa9RhcSL3I/AAAAAAAAugI/29VoVryOFvw/s1600/carros-tunados-carros+(6).jpg`;

  const theme = useTheme();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <ItemStyle>
      <ImageStyle
        resizeMode={"contain"}
        source={{
          uri: imageCar,
        }}
        style={[
          {
            transform: [{ scale }],
          },
        ]}
      />
      <TextContainer>
        <View
          style={{
            width: "60%",
            marginRight: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Heading
              style={[
                {
                  opacity,
                  transform: [{ translateX: translateXHeading }],
                },
              ]}
            >
              {model}
            </Heading>
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignContent: "center",
                gap: 20,
              }}
            >
              <Animated.View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                    justifyContent: "center",
                  },
                  {
                    opacity,
                    transform: [
                      {
                        translateX: translateXDescription,
                      },
                    ],
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="car-info"
                  size={22}
                  color={theme.colors.text_detail}
                />
                <DescriptionPlate>{plate}</DescriptionPlate>
              </Animated.View>
            </View>
          </View>
        </View>
        <Animated.View
          style={[
            { width: "40%" },
            {
              opacity,
              transform: [
                {
                  translateX: translateXDescription,
                },
              ],
            },
          ]}
        >
          <Button
            title="Detalhes"
            color={theme.colors.button_color}
            onPress={() => {}}
            disabled={false}
          />
        </Animated.View>
      </TextContainer>
    </ItemStyle>
  );
};

const Pagination = ({ scrollX, veiculosIds = [] }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = ({ value }: { value: number }) => {
      const index = Math.round(value / width);

      setCurrentIndex(index);
    };
    scrollX.addListener(handleScroll);
    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  return (
    <PaginationContainer>
      <CurrentIndex>
        {currentIndex + 1} /{veiculosIds.length}
      </CurrentIndex>
    </PaginationContainer>
  );
};

export default function CarSlider({ onData }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPropsItem[]>([]);
  const [ids, setIds] = useState<number[]>([]);

  //TRANSFERE A PROPRIEDADE PARA O COMPONENTE PAI QUE É O HOME
  const sendDataToParent = (data: IPropsItem) => {
    onData(data); // Chama a função de callback do componente pai
  };

  //FAZ A REQUISIÇÃO NA API PARA PEGAR A LISTA DE VEÍCULOS
  async function fetchData() {
    try {
      const response = await api.get("/vehicle");
      if (response.data.length > 0) return response.data;
      return [];
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    fetchData().then((data: IVehicle[]) => {
      const veiculosIds: number[] = [];
      const itens: IPropsItem[] = data.map((v, index) => {
        veiculosIds.push(v.id);
        return {
          id: v.id,
          status: v.status,
          image: v?.image ?? "",
          plate: v.plate,
          type: v.type,
          model: v.model,
          yearManufacture: v.yearManufacture,
          dateAcquisition: v.dateAcquisition,
          index,
          scrollX,
        };
      });
      setData(itens);
      setIds(veiculosIds);
      sendDataToParent(itens[0]);
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleScroll = ({ value }: { value: number }) => {
      const index = Math.round(value / width);
      console.log('INDEX:', index);
      if(index) sendDataToParent(data[index]);
    };
    scrollX.addListener(handleScroll);
    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  return (
    <Container>
      {isLoading ? (
        <Loading height={50} size={50} />
      ) : (
        <Animated.FlatList
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={({ item, index }) => (
            <Item {...item} index={index} scrollX={scrollX} />
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
      )}
      <Pagination scrollX={scrollX} veiculosIds={ids} />
    </Container>
  );
}
