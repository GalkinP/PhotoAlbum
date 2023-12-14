const React = require('react');

function Navbar() {
  return (
    <>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='/auth/registration'>
            Sign Up
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/auth/authorization'>
            Sign In
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            Main Page
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link disabled'
            href='#'
            tabindex='-1'
            aria-disabled='true'
          >
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
}

module.exports = Navbar;
