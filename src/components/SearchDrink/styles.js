import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;

  ${props =>
    props.isFocused &&
    css`
      border-width: 1px;
      border-color: #da4453;
    `}
`;

export const ContainerInput = styled.View`
  background-color: #232129;
  flex-direction: row;
  align-items: center;
  flex: 4;
  width: 100%;
  padding: 0 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
  margin-bottom: 2px;
`;


export const TextInput = styled.TextInput`
  flex: 1;
  color: #797979;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 40px;
  background: #da4453;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
