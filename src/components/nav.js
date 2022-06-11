import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function NavBar() {
  return (
    <header className="nav-header">
      <nav className="nav">
        <ul className="links">
          <li><Link to="/"><h1 className="Bookstore-CMS">Bookstore CMS</h1></Link></li>
          <li><Link to="/" className="bk-nav">Book</Link></li>
          <li><Link to="/category" className="cat-nav">Category</Link></li>

          <span className="user-profile-wrapper d_flex">
            <FaUserAlt style={{
              color: '#0290ff',
              height: '15px',
              cursor: 'pointer',
              transition: 'all ease-in 300ms',
            }}
            />
          </span>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
