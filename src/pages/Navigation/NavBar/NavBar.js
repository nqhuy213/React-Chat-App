import React from 'react';
import {useHistory} from 'react-router-dom';
import NavButton from '../NavButton';
import {NavBar as S} from './NavBar.styled';

export default function NavBar() {
  let history = useHistory();

  const handleClick = (e) => {
    const page = e.target.id;
    history.push(`/${page}`);
  };

  return (
    <S.Wrapper>
      <S.ProfileContainer>
        <S.ProfileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        <h5>Harvey Nguyen</h5>
      </S.ProfileContainer>
      <ul>
        <li>
          <NavButton id="home" icon="home" onClick={handleClick}>
            HOME
          </NavButton>
        </li>
        <li>
          <NavButton id="chat" icon="chat" onClick={handleClick}>
            CHAT
          </NavButton>
        </li>
        <li>
          <NavButton id="contact" icon="contact" onClick={handleClick}>
            CONTACT
          </NavButton>
        </li>
        <li>
          <NavButton
            id="notifications"
            icon="notifications"
            onClick={handleClick}
          >
            NOTIFICATIONS
          </NavButton>
        </li>
        <li>
          <NavButton id="calendar" icon="calendar" onClick={handleClick}>
            CALENDAR
          </NavButton>
        </li>
        <li>
          <NavButton id="settings" icon="settings" onClick={handleClick}>
            SETTINGS
          </NavButton>
        </li>
      </ul>
      <S.LogoutButtonWrapper>
        <NavButton icon="logout">LOGOUT</NavButton>
      </S.LogoutButtonWrapper>
    </S.Wrapper>
  );
}
