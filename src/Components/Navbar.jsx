// src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Museum Logo" />
        </NavLink>
      </div>

      <button
        className={`burger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)} // close menu on click
          >
            Visit
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/exhibitions" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            Exhibitions
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/molslaboratory" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            Molslaboratory
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/my-kraeg" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            My Kræg
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
