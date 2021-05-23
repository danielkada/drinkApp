import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const ContainerCards = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
`;

export const Card = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #232129;
  width: 100px;
  height: 158px;
  border-radius: 4px;
`;

export const CardText = styled.Text`
  font-size: 12px;
  color: #fff;
  max-width: 56px;
  text-align: center;
  margin-top: 8px;
`;

export const Optional = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: #fff;
  border-width: 1px;
  width: 220px;
  height: 55px;
  margin-top: 30px;
`;

export const OptionalText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
