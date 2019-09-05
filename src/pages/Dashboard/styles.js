import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 1108px;
  margin: 0 auto;

  h1 {
    font-weight: normal;
    margin-bottom: 30px;
  }

  div.login > form {
    display: flex;
    flex-direction: column;
    max-width: 275px;

    input {
      padding: 10px;
      margin-bottom: 5px;
      border: 1px solid #e8e8ee;
      border-radius: 4px;
    }

    button {
      padding: 10px;
      margin-top: 5px;
      border: 0;
      border-radius: 4px;
      background: #6b3c8b;
      color: #fff;
    }
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

    button.reload {
      padding: 0 15px;
      margin: 0 20px 20px 0;
      border: 0;
      border-radius: 4px;
      background: #fefefe;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }
  }

  div.users {
    div.users-list {
      padding: 15px;
      min-height: 450px;
      min-width: 670px;
      margin-bottom: 30px;
      border-radius: 4px;
      background: #fefefe;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

      span {
        font-weight: bold;
        font-size: 18px;
      }

      div.loading {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 20px;

        span {
          color: rgba(0, 0, 0, 0.7);
        }
      }

      hr {
        margin: 10px -20px;
        height: 1px;
        border: 0;
        color: #eae9ee;
        background-color: #eae9ee;
      }

      /* overflow-x: auto; */

      table {
        width: 100%;

        td {
          padding: 10px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  div.pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
  }
`;
