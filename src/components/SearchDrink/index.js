import React, { useCallback, useState } from 'react';

import {
  Container,
  ContainerInput,
  Icon,
  TextInput,
  Button,
  ButtonText,
} from './styles';

export default function SearchDrink() {
  const [drink, setDrink] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <ContainerInput>
        <Icon name="search" color="#797979" />
        <TextInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholderTextColor="#797979"
          placeholder="Search"
          onChangeText={value => setDrink(value)}
          value={drink}
        />
      </ContainerInput>
      <Button>
        <ButtonText>GO</ButtonText>
      </Button>
    </Container>
  );
}
