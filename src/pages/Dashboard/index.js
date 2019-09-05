import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdRefresh } from 'react-icons/md';
import { toast } from 'react-toastify';

import Navbar from '../../components/Navbar';

import { api, suapApi } from '../../services/api';

import { Container, Content } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const [newsLength, setNewsLength] = useState('...');

  async function getNews() {
    if (token) {
      const newsResponse = await api.get('/news');

      setNewsLength(newsResponse.data.length);
    }
  }

  async function getUsers() {
    if (token) {
      setLoading(true);
      const usersResponse = await api.get(`/users?limit=${8}&page=${page}`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setUsers(usersResponse.data);
      setLoading(false);
    }
  }

  async function handleLogin() {
    try {
      const response = await suapApi.post('/autenticacao/token/', {
        username,
        password,
      });

      const { token: returnedToken } = response.data;

      if (returnedToken) {
        setToken(returnedToken);
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.detail);
      } else {
        toast.error(err.response);
      }
    }
  }

  useEffect(() => {
    getUsers();
  }, [page]);

  useEffect(() => {
    if (token) {
      getUsers();
      getNews();
    }
  }, [token]);

  function renderLogin() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input
            placeholder="Matrícula"
            type="number"
            name="matricula"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            name="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    );
  }

  useEffect(() => {
    if (token) {
      getUsers();
      getNews();
    }
  }, []);

  function handlePage(num) {
    if (page <= 1 && num === -1) return;

    setPage(page + num);
  }

  return (
    <Container>
      <Navbar />
      <Content>
        {token ? (
          <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="cards">
              <div className="card">
                <span className="big">{users.totalCount || '...'}</span>
                <span>{users.totalCount > 1 ? 'Alunos' : 'Aluno'}</span>
              </div>
              <div className="card">
                <span className="big">{newsLength}</span>
                <span>{newsLength > 1 ? 'Notícias' : 'Notícia'}</span>
              </div>
              <button
                type="button"
                className="reload"
                onClick={() => getUsers()}
              >
                <MdRefresh size={28} />
              </button>
            </div>
            <div className="users">
              <div className="users-list">
                <span>Alunos</span>
                <hr />
                {loading ? (
                  <div className="loading">
                    <span>Carregando...</span>
                  </div>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Ano</th>
                        <th>Turno</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.users &&
                        users.users.length > 0 &&
                        users.users.map(user => (
                          <tr key={user.matricula}>
                            <td>{user.matricula}</td>
                            <td>{user.nome_usual}</td>
                            <td>{user.curso}</td>
                            <td>{user.curso_ano || '?'}</td>
                            <td>{user.curso_turno || '?'}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
              <div className="pagination">
                <MdChevronLeft size={28} onClick={() => handlePage(-1)} />
                <p>{page}</p>
                <MdChevronRight size={28} onClick={() => handlePage(1)} />
              </div>
            </div>
          </div>
        ) : (
          renderLogin()
        )}
      </Content>
    </Container>
  );
}
