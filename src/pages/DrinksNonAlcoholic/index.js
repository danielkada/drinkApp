import React from 'react';

import { useNavigation } from '@react-navigation/native'

import { Image, ActivityIndicator, Text } from 'react-native';

//import Icon from 'react-native-vector-icons/Feather'

import { useSelector } from 'react-redux';

import SearchDrink from '../../components/SearchDrink';

import {
  Container,
  ContainerCard,
  Card,
  Title,
  CardButton,
  CardButtonText,
  ContainerBack,
  Button,
  Icon
} from './styles';

export default function DrinksAlcoholic() {

  const navigation = useNavigation();
  const alcoholicBeverages = useSelector(state => state.getDrinksNonAlcoholic.nonAlcoholicBeverages);
  const isLoading = useSelector(state => state.getDrinksNonAlcoholic.isLoading);

  const drinksAlcoholic = alcoholicBeverages.length > 0 ? alcoholicBeverages : [] ;

  return (
    <Container>
      <SearchDrink />

      {isLoading
        ? <ActivityIndicator size="small" color="#da4453" />
        : <ContainerCard>
        {drinksAlcoholic.map(drink => (
          <Card key={drink.idDrink}>
          <Title>{drink.strDrink}</Title>

          <Image
            source={{ uri: drink.strDrinkThumb }}
            style={{ width: 70, height: 70 }}
          />

          <Text>{drink.strInstructions}</Text>

          <CardButton
            onPress={() => navigation.navigate('DrinkNonAlcoholic', {
              drink: drink,
            })}
          >
            <CardButtonText>TO SEE</CardButtonText>
          </CardButton>
        </Card>
        ))}
      </ContainerCard>}

      <ContainerBack>
        <Button
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" color="#797979" />
        </Button>
      </ContainerBack>
    </Container>
  );
};
