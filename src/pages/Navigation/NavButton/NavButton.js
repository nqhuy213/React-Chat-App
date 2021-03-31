import React from 'react';
import {NavButtonStyled as S} from './NavButton.styled';

export default function NavButton(props) {
  const {icon} = props;

  return (
    <S.Wrapper {...props}>
      <S.IconWrapper>
        <img
          src={`./icons/navigations/normal/${icon}.svg`}
          alt={`${icon} icon`}
        />
      </S.IconWrapper>
      {props.children}
    </S.Wrapper>
  );
}
