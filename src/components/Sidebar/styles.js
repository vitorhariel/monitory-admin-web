import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fefefe;
  border: 2px solid #eae9ee;
  height: 100%;
  width: 280px;

  img {
    margin: 30px 0 50px 0;
    width: 150px;
  }

  nav {
    li {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }

      a {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 925px) {
    img,
    nav > ul > li > a {
      display: none;
    }

    width: 70px;

    nav {
      margin-top: 30px;
    }
  }
`;
