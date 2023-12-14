const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

function StartPage({ title }) {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
}

module.exports = StartPage;
