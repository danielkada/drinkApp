import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
`;

export const CardButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #da4453;
  border-radius: 12px;
  width: 100px;
  height: 26px;
  margin-top: 30px;
`;

export const CardButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ContainerCard = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 211px;
  background: #232129;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const ContainerBack = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const Button = styled(RectButton)`
  background: #da4453;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled(FeatherIcon)`
  padding: 10px;
  color: #fff;
`;
