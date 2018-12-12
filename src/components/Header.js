import * as React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <label className="label">{title}</label>
    <div>{subtitle}</div>
  </div>
);

export default Header;
