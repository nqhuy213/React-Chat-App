import React from 'react';
import NavBar from './NavBar';
import {Navigation as S} from './Navigation.styled';

export default function Navigation({page: Page}) {
  return (
    <S.Wrapper>
      <NavBar />
      <Page />
    </S.Wrapper>
  );
}
