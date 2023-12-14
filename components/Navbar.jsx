const React = require('react');

function Navbar() {
  return (
    <>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='#'>
            Active
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
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
