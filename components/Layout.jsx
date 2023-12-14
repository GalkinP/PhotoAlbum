const React = require("react");


module.exports = function Layout({ title, children}) {

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        {/* <script defer src="/js/regButtons.js" /> */}
      
      </head>
      <body>{children}</body>
    </html>
  );
};
