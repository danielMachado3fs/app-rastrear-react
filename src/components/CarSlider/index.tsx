import React from "react";

import {
  CIRCLE_SIZE,
  Container,
  DOT_SIZE,
  Description,
  Heading,
  ImageStyle,
  ItemStyle,
  PaginationContainer,
  PaginationDot,
  PaginationDotContainer,
  TextContainer
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View
} from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import data from "../data";

const { width, height } = Dimensions.get("window");
// export const LOGO_WIDTH = 220;
// export const LOGO_HEIGHT = 40;
// export const DOT_SIZE = 30;
// export const TICKER_HEIGHT = 16;
// export const CIRCLE_SIZE = width * 0.45;

interface Props {
  scrollX: Animated.Value;
}

// const Circle = ({ scrollX }: Props) => {
//   return (
//     <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
//       {data.map(({ color }, index) => {
//         const inputRange = [
//           (index - 0.55) * width,
//           index * width,
//           (index + 0.55) * width,
//         ];
//         const scale = scrollX.interpolate({
//           inputRange,
//           outputRange: [0, 1, 0],
//           extrapolate: "clamp",
//         });
//         const opacity = scrollX.interpolate({
//           inputRange,
//           outputRange: [0, 0.2, 0],
//         });
//         return (
//           <Animated.View
//             key={index}
//             style={[
//               styles.circle,
//               {
//                 backgroundColor: color,
//                 opacity,
//                 transform: [{ scale }],
//               },
//             ]}
//           />
//         );
//       })}
//     </View>
//   );
// };

// const Ticker = ({ scrollX }: Props) => {
//   const inputRange = [-width, 0, width];
//   const translateY = scrollX.interpolate({
//     inputRange,
//     outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
//   });
//   return (
//     <TickerContainer>
//       <Animated.View style={{ transform: [{ translateY }] }}>
//         {data.map(({ status }, index) => {
//           return (
//             <StatusInfoContainer key={index}>
//               <View
//                 style={[
//                   {
//                     backgroundColor: "#00FF19",
//                     width: 10,
//                     height: 10,
//                     borderRadius: 10 / 2,
//                   },
//                   status === "Off" && { backgroundColor: "red" },
//                 ]}
//               />
//               <TickerText key={index}>{status}</TickerText>
//             </StatusInfoContainer>
//           );
//         })}
//       </Animated.View>
//     </TickerContainer>
//   );
// };

interface PropsItem extends Props {
  id: number;
  status: string;
  imageUri: any;
  color: string;
  placa: string;
  tipo: string;
  index: number;
}

const Item = ({
  id,
  status,
  imageUri,
  color,
  placa,
  tipo,
  index,
  scrollX,
}: PropsItem) => {
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
        source={imageUri}
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
              // backgroundColor: "red",
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
              10000 lx 2p
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
                <Description>ABC-123</Description>
              </Animated.View>
              {/* <Animated.View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
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
                  name="truck"
                  size={22}
                  color={theme.colors.text_detail}
                />
                <Description>Agrale</Description>
              </Animated.View> */}
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

const Pagination = ({ scrollX }: Props) => {
  const theme = useTheme();
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <PaginationContainer>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: "absolute",
            // backgroundColor: 'red',
            transform: [{ translateX }],
          },
        ]}
      />
      {data.map(item => {
        return (
          <PaginationDotContainer key={item.id}>
            <PaginationDot style={[{ backgroundColor: theme.colors.primary }]} />
          </PaginationDotContainer>
        );
      })}
    </PaginationContainer>
  );
};

export default function CarSlider() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      {/* <Circle scrollX={scrollX} /> */}
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
      <Pagination scrollX={scrollX} />
      {/* <Ticker scrollX={scrollX} /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: "absolute",
    top: "15%",
  },
});
