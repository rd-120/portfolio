import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h3 className="name">RD.</h3>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'link-active' : 'nav-links'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'link-active' : 'nav-links'
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'link-active' : 'nav-links'
              }
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
