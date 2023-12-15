const React = require('react');
const Layout = require('./Layout');

function RegistrationFormPage({ title }) {
  return (
    <Layout>
      <div className='container'>
        <form id='sing-up'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Name
            </label>
            <input
              name='name'
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text' />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Mail
            </label>
            <input
              name='mail'
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
              name='password'
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
              name='passwordCheck'
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <h1 style={{ color: 'red' }} className='error' />
      </div>
    </Layout>
  );
}

module.exports = RegistrationFormPage;
