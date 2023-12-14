const React = require('react');
const Layout = require('./Layout');

function AuthorizationFormPage({ title }) {
  return (
    <Layout title={title}>
      <div className='container'>
        <form id='sign-in'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
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
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationFormPage;
