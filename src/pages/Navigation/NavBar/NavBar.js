import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {NavBar as S} from './NavBar.styled';

export default function NavBar() {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <S.Wrapper>
      <ul>
        <li>
          <button type="button" onClick={handleClick}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => history.push('/chat')}>Chat</button>
        </li>
      </ul>
    </S.Wrapper>
  );
}
