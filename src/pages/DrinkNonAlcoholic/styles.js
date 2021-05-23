import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
  margin-top: 40px;
  max-width: 300px;
`;

export const ContainerInfo = styled.ScrollView`
  max-width: 360px;
  border-width: 1px;
  border-color: #DA4453;
  padding: 20px;
  margin-top: 20px;
`;

export const TitleInfo = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
`;

export const Info = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #7E7E7E;
  margin-bottom: 40px;
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
`






