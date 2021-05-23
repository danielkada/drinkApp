import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrinksAlcoholic from '../pages/DrinksAlcoholic';
import DrinksNonAlcoholic from '../pages/DrinksNonAlcoholic';
import Categories from '../pages/Categories';
import DrinkAlcoholic from '../pages/DrinkAlcoholic';
import DrinkNonAlcoholic from '../pages/DrinkNonAlcoholic';

const Pages = createStackNavigator();

export default function PagesRoutes() {
  return (
    <Pages.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312E38' },
      }}
    >
      <Pages.Screen name="Categories" component={Categories} />
      <Pages.Screen name="DrinksAlcoholic" component={DrinksAlcoholic} />
      <Pages.Screen name="DrinksNonAlcoholic" component={DrinksNonAlcoholic} />
      <Pages.Screen name="DrinkAlcoholic" component={DrinkAlcoholic} />
      <Pages.Screen name="DrinkNonAlcoholic" component={DrinkNonAlcoholic} />
    </Pages.Navigator>
  )
};
