import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  width: 100%;
  /* justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px;
  border-radius: 20px; */
`;

export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CarInfo = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const LicensePlateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const CarTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const CarType = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Widget = styled.View``;

export const ArrowBack = styled(Ionicons)`
  top: ${RFValue(120)}px;
  right: ${RFValue(140)}px;
`;

export const ArrowForward = styled(Ionicons)`
  bottom: ${RFValue(130)}px;
  right: ${RFValue(-140)}px;
`;

interface ImageIndexProps {
  active: boolean;
}

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width * 0.88}px;
  background-color: #fff;
  /* height: 132px; */
  /* justify-content: center;
  align-items: center; */
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
