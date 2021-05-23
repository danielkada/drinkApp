import React, { useEffect } from 'react';
import { Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import getDrinkId from '../../store/actions/getDrinkId';

import logoDrinkImg from '../../assets/logoDrink.png'

import { useNavigation } from '@react-navigation/native';

import { Container, Title, TitleInfo, Info, ContainerInfo, ContainerBack, Button, Icon } from './styles';

export default function DrinkAlcoholic({ route }) {

  const { drink } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const drinkId = drink.idDrink;

  useEffect(() => {
    dispatch(getDrinkId(drinkId));
  }, [])

  const drinkIdDetails = useSelector(state => state.getDrinkId.details);
  const details = drinkIdDetails;

  const ingredients = `
  ${details.strIngredient1 == null ? '' : details.strIngredient1}
  ${details.strIngredient2 == null ? '' : details.strIngredient2}
  ${details.strIngredient3 == null ? '' : details.strIngredient3}
  ${details.strIngredient4 == null ? '' : details.strIngredient4}
  ${details.strIngredient5 == null ? '' : details.strIngredient5}
  ${details.strIngredient6 == null ? '' : details.strIngredient6}
  ${details.strIngredient7 == null ? '' : details.strIngredient7}
  ${details.strIngredient8 == null ? '' : details.strIngredient8}
  ${details.strIngredient9 == null ? '' : details.strIngredient9}
  ${details.strIngredient10 == null ? '' : details.strIngredient10}
  ${details.strIngredient11 == null ? '' : details.strIngredient11}
  ${details.strIngredient12 == null ? '' : details.strIngredient12}
  ${details.strIngredient13 == null ? '' : details.strIngredient13}
  ${details.strIngredient14 == null ? '' : details.strIngredient14}
  ${details.strIngredient15 == null ? '' : details.strIngredient15}
  `

  return (
    <Container>
      <Image source={logoDrinkImg}/>

      <Title>{drink.strDrink}</Title>
      <Image style={{ width: 200, height: 200, marginTop: 40 }} source={{ uri: drink.strDrinkThumb }} />

      <ContainerInfo>
        <TitleInfo>Ingredients</TitleInfo>
        <Info>{ingredients}</Info>

        <TitleInfo>Instructions</TitleInfo>
        <Info>{details.strInstructions}</Info>
      </ContainerInfo>

      <ContainerBack>
        <Button
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" color="#797979" />
        </Button>
      </ContainerBack>
    </Container>
  )
}
