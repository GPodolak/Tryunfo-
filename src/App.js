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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardsArray: [],
    };
    this.savingCard = this.savingCard.bind(this);
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

 savingCard() {
   const {
     cardsArray,
     cardName,
     cardDescription,
     cardAttr1,
     cardAttr2,
     cardAttr3,
     cardImage,
     cardRare,
     cardTrunfo,
     hasTrunfo,
   } = this.state;
   const deckCards = {
     cardName,
     cardDescription,
     cardAttr1,
     cardAttr2,
     cardAttr3,
     cardImage,
     cardRare,
     cardTrunfo,
   };
   this.setState({
     cardsArray: [...cardsArray, deckCards],
     cardName: '',
     cardDescription: '',
     cardAttr1: '0',
     cardAttr2: '0',
     cardAttr3: '0',
     cardImage: '',
     cardRare: 'normal',
     cardTrunfo: false,
     hasTrunfo: cardTrunfo || hasTrunfo,
   });
 }

 removeCard(name) {
   const { cardsArray } = this.state;
   const list = cardsArray.filter(({ cardName }) => cardName !== name);
   const thisIsTrunfo = list.some(({ cardTrunfo }) => cardTrunfo);
   this.setState(({
     cardsArray: list,
     hasTrunfo: thisIsTrunfo,
   }));
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
     hasTrunfo,
     cardsArray,
   } = this.state;

   return (
     <div>
       <section>
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
           hasTrunfo={ hasTrunfo }
           isSaveButtonDisabled={ this.isSaveButtonDisabled() }
           onSaveButtonClick={ this.savingCard }
         />
       </section>
       <section>
         <Card
           cardName={ cardName }
           cardDescription={ cardDescription }
           cardImage={ cardImage }
           cardRare={ cardRare }
           cardAttr1={ cardAttr1 }
           cardAttr2={ cardAttr2 }
           cardAttr3={ cardAttr3 }
           cardTrunfo={ cardTrunfo }
         />
       </section>
       <section>
         <h1>Lista de Cartas</h1>
         { cardsArray.map((card) => (
           <div key={ card.cardName }>
             <Card
               cardName={ card.cardName }
               cardDescription={ card.cardDescription }
               cardAttr1={ card.cardAttr1 }
               cardAttr2={ card.cardAttr2 }
               cardAttr3={ card.cardAttr3 }
               cardImage={ card.cardImage }
               cardRare={ card.cardRare }
               cardTrunfo={ card.cardTrunfo }
             />
             <button
               data-testid="delete-button"
               onClick={ () => this.removeCard(card.cardName) }
               type="button"
             >
               Excluir
             </button>
           </div>
         ))}
       </section>
     </div>
   );
 }
}
export default App;
