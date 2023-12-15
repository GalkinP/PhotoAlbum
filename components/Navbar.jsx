const React = require('react');

function Navbar({ user }) {
  return (
    <>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            aria-current='page'
            href='/auth/registration'
          >
            Sign Up
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/auth/authorization'>
            Sign In
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='#sign-out'
            aria-current='page'
            href='/auth/logout'
          >
            Sign Out
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            Main Page
          </a>
        </li>
        <li className='nav-item'>
          {user && (
            <a className='nav-link' href='/albums'>
              Albums
            </a>
          )}
        </li>
      </ul>
    </>
  );
}

module.exports = Navbar;
