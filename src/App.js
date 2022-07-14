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
  }

  // lindar alteraçao dos inputs
 onInputChange =(event) => {
   const { name, value, type, checked } = event.target;
   const values = type === 'checkbox' ? checked : value;
   this.setState({
     [name]: values,
   });
 }

 validateAttr = (attr) => {
   const maxValue = 90;
   return (Number(attr) < 0 || Number(attr) > maxValue);
 }

 // codigo construido com ajuda do aluno Marcelo Marques da 22B

 isSaveButtonDisabled = () => {
   // Será validado se o botão salvar está desabilitado se o campo de atributo for maior que 90 e menor que 0.
   const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
   const attrValue = this.validateAttr(cardAttr1)
    || this.validateAttr(cardAttr2)
    || this.validateAttr(cardAttr3);

   //  Será validado se o botão salvar está desabilitado se a somatória dos campos de atributos for maior que 210.
   const totalAttr = 210;
   const maxAtt = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > totalAttr;

   //  Será validado se o botão salvar está desabilitado se o campo estiver vazio.
   const { cardName, cardDescription, cardImage, cardRare } = this.state;
   const emptyCard = cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '';
   // valida se as constantes acima são true or false;
   return (emptyCard || maxAtt || attrValue);
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
       <Form
         onInputChange={ this.onInputChange }
         cardName={ cardName }
         cardDescription={ cardDescription }
         cardAttr1={ cardAttr1 }
         cardAttr2={ cardAttr2 }
         cardAttr3={ cardAttr3 }
         cardImage={ cardImage }
         cardRare={ cardRare }
         cardTrunfo={ cardTrunfo }
         isSaveButtonDisabled={ this.isSaveButtonDisabled() }
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
         // onSaveButtonClick={ this.saveCard }
       />
     </>
   );
 }
//  this.setState({ isSaveButtonDisabled: !checkedForm });
}
export default App;
