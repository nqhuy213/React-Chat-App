import styled from 'styled-components';

export const NavBar = {};

NavBar.Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primaryWhite};
  height: 100%;
  padding: 0;
`;

NavBar.ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4rem;
`;

NavBar.ProfileImage = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

NavBar.LogoutButtonWrapper = styled.div`
  box-shadow: none;
`;
