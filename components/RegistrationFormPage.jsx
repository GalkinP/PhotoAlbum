const React = require('react');
const Layout = require('./Layout');

function RegistrationFormPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container'>
        <form id='sing-up'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Name
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Login
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              PasswordCheck
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationFormPage;
