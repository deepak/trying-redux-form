import React from 'react';

// nothing much happening here
// react-router will add all the components as it's childern
// so it is a good place to add common props
// is completely optional. need to check if performance suffers with this
const App = ({ children }) => (
  <div>
    { children }
  </div>
);

export default App;