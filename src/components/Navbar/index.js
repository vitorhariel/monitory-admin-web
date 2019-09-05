import React from 'react';
import { MdDashboard } from 'react-icons/md';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <div className="content">
        <h3>Morale</h3>
        <nav>
          <ul>
            <li>
              <a href="/">
                <MdDashboard size={24} color="#000" /> <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
