import React, { useState } from 'react';
import Router from 'next/router';
import Head from '../components/Head';
import styled from 'styled-components';
import { mixins } from '../style';

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  height: 100vh;
  form {
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 2rem;
    width: 50vw;
    max-width: 700px;
    text-align: center;
    input {
      color: ${({ theme }) => theme.colors.black};
      font-size: 60px;
      font-weight: 700;
      text-align: center;
      outline: 0;
      border: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setUsername(value);
  };

  return (
    <main>
      <Head title="OctoProfile" />

      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
          <label htmlFor="username">GitHub Username</label>
          <input name="username" type="text" onChange={handleChange} />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;