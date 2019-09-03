import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;
export const Content = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 1108px;

  h1 {
    font-weight: normal;
    margin-bottom: 30px;
  }

  div.cards {
    display: flex;

    div.card {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 30px;
      margin: 0 20px 20px 0;
      border-radius: 4px;
      background: #fefefe;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

      span.big {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }

  div.users {
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
    background: #fefefe;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

    span {
      font-weight: bold;
      font-size: 18px;
    }

    hr {
      margin: 10px -20px;
      height: 1px;
      border: 0;
      color: #eae9ee;
      background-color: #eae9ee;
    }

    overflow-x: auto;

    table {
      td {
        padding: 10px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
