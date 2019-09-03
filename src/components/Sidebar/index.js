import React from 'react';
import { MdDashboard } from 'react-icons/md';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="Morale" />
      <nav>
        <ul>
          <li>
            <MdDashboard size={24} color="#551a8b" /> <a href="/">Dashboard</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
