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
      // isSaveButtonDisabled: true,
    };
    // this.state;
    // console.log();
  }

  // lindar alteraçao dos inputs
 handlerChange =(event) => {
   const { name, value, type, checked } = event.target;
   const values = type === 'checkbox' ? checked : value;
   this.setState({
     [name]: values,
   });
 }

 isSaveButtonDisabled = () => {
   const totalAttr = 210;
   const attrMax = 90;
   const attrCard = [cardAttr1, cardAttr2, cardAttr3];
   const emptyCard = [cardName, cardDescription, cardImage, cardRare];
   const maxCardAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
   const whithoutContent = emptyCard.every((element) => element);
   const withoutMax = attrCard.every((attr) => attr >= 0 && attr <= attrMax);
   const checkedForm = whithoutContent && withoutMax && totalAttr <= maxCardAttr;
   console.log(checkedForm);
 }

 render() {
   console.log(this.isSaveButtonDisabled());
   const {
     cardName,
     cardDescription,
     cardAttr1,
     cardAttr2,
     cardAttr3,
     cardImage,
     cardRare,
     cardTrunfo,
     //  isSaveButtonDisabled,
   } = this.state;

   return (
     <>
       <Form
         onChange={ this.handlerChange }
         cardName={ cardName }
         cardDescription={ cardDescription }
         cardAttr1={ cardAttr1 }
         cardAttr2={ cardAttr2 }
         cardAttr3={ cardAttr3 }
         cardImage={ cardImage }
         cardRare={ cardRare }
         cardTrunfo={ cardTrunfo }
       />
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
  // this.setState({ isSaveButtonDisabled: !checkedForm });
}
export default App;
