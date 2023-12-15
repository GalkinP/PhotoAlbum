const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

function StartPage() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ margin: '0 auto' }}>FrameFolio</h1>

        <img
          style={{ width: '40%', margin: '0 auto', borderRadius: '20px' }}
          src='https://img.freepik.com/free-photo/assortment-with-happy-emotion_23-2148860256.jpg?size=626&ext=jpg&ga=GA1.1.2060787682.1702629675&semt=sph'
          alt=''
        />
      </div>
    </Layout>
  );
}

module.exports = StartPage;
