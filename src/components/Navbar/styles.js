import styled from 'styled-components';

export const Container = styled.div`
  background: #fefefe;
  border: 2px solid #eae9ee;
  height: 100px;
  width: 100%;

  div.content {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 100px;
    width: 100%;
    max-width: 1108px;
    margin: 0 auto;
    padding: 0 50px;
  }

  img {
    width: 120px;
  }

  nav {
    li > a {
      display: flex;
      align-items: center;

      margin-left: 20px;

      svg {
        margin-right: 5px;
      }

      span {
        font-size: 24px;
        color: #000;
      }
    }
  }

  /* @media screen and (max-width: 935px) {
    img,
    nav > ul > li > a > span {
      display: none;
    }

    width: 50px;
    min-width: 50px;

    nav {
      margin-top: 30px;
    }
  } */
`;
