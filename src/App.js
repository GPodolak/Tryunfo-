import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// import card from './components/Cards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    };
    // console.log();
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <>
        <Form />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          // isSaveButtonDisabled={ isSaveButtonDisabled }
          // onInputChange={ this.handleInputChange }
          // onSaveButtonClick={ this.saveCard }
        />
      </>
    );
  }
}
export default App;
