import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';

import { api, suapApi } from '../../services/api';

import { Container, Content } from './styles';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const username = prompt('Matrícula:');
    const password = prompt('Senha:');

    const response = await suapApi.post('/autenticacao/token/', {
      username,
      password,
    });

    const { token } = response.data;

    if (token) {
      const usersResponse = await api.get('/users', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setUsers(usersResponse.data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Dashboard</h1>
        <div className="cards">
          <div className="card">
            <span className="big">{users.length || '...'}</span>
            <span>{users.length > 1 ? 'Alunos' : 'Aluno'}</span>
          </div>
        </div>
        <div className="users">
          <span>Alunos</span>
          <hr />
          <table>
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Ano</th>
              <th>Turno</th>
            </tr>
            {users.map(user => (
              <tr>
                <td>{user.matricula}</td>
                <td>{user.nome_usual}</td>
                <td>{user.curso}</td>
                <td>{user.curso_ano || '?'}</td>
                <td>{user.curso_turno || '?'}</td>
              </tr>
            ))}
          </table>
        </div>
      </Content>
    </Container>
  );
}
