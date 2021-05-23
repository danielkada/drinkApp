import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Image, ActivityIndicator } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import getDrinksAlcoholic from '../../store/actions/getDrinkAlcoholic';
import getDrinksNonAlcoholic from '../../store/actions/getDrinkNonAlcoholic';

import logoImg from '../../assets/logo.png';
import nonAlcoholicImg from '../../assets/nonAlcoholic.png';
import alcoholicImg from '../../assets/alcoholic.png';

import { Container, ContainerCards, CardText, Card, Title } from './styles';

export default function Categories() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const fetchAlcoholicBeverages = useCallback(() => {
    dispatch(getDrinksAlcoholic());
    navigation.navigate('DrinksAlcoholic');
  }, [])

  const fetchNonAlcoholicBeverages = useCallback(() => {
    dispatch(getDrinksNonAlcoholic());
    navigation.navigate('DrinksNonAlcoholic');
  }, [])

  return (
    <Container>
      <Image source={logoImg} />

      <Title>Choose an option</Title>

      <ContainerCards>
        <Card onPress={fetchAlcoholicBeverages}>
          <Image source={alcoholicImg} />
          <CardText>Alcoholic</CardText>
        </Card>

        <Card onPress={fetchNonAlcoholicBeverages}>
          <Image source={nonAlcoholicImg} />
          <CardText>Non Alcoholic</CardText>
        </Card>
      </ContainerCards>
    </Container>
  );
};
