const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossOrigin='anonymous'
        />
        <script defer src='../scripts/authUser.js' />
        <link rel='stylesheet' href='/css/styles.css' />
        {/* <script defer src="/js/regButtons.js" /> */}
        <script defer src='/scripts/albumDelete.js' />
        <script defer src='/scripts/albumAdd.js' />
      </head>
      <body>{children}</body>
    </html>
  );
};
