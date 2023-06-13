import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import elly from '../../img/elly.jpg';
import '../../styles/global.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img src={elly} alt="My Logo" className="logo" /> Elena Gospodinova
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/timeouts">TimeOuts</CustomLink>
        <CustomLink to="/restaurants">Restaurants</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
