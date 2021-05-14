import styled from 'styled-components';

export const NavButtonStyled = {};

NavButtonStyled.Wrapper = styled.div`
  box-shadow: none;
  padding: 1rem 2rem;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primaryBlue
      : props.theme.colors.primaryGray};
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 0.5rem;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  display: flex;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.secondaryWhite : 'unset'};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryWhite};
  }
`;

NavButtonStyled.IconWrapper = styled.div`
  margin-right: 1rem;
  box-shadow: none;
`;
