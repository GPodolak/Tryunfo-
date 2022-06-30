import React from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
// import card from './components/Cards';

class App extends React.Component {
  render() {
    return (
      <>
        <Form />
        <Cards />
      </>
    );
  }
}
export default App;
