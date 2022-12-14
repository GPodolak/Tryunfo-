import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            <input
              name="cardDescription"
              type="textArea"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>

          <label htmlFor="attr1-input">
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>

          <label htmlFor="image-input">
            <input
              name="cardImage"
              type="text"
              data-testid="image-input"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>

          {/* <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label> */}

          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
          <div>
            <label htmlFor="trunfo-input">
              {hasTrunfo ? (<span> Voc?? j?? tem um Super Trunfo em seu baralho. </span>)
                : (
                  <>
                    <input
                      type="checkbox"
                      name="cardTrunfo"
                      id="trunfo-input"
                      data-testid={ hasTrunfo ? '' : 'trunfo-input' }
                      onChange={ onInputChange }
                      checked={ cardTrunfo }
                    />
                    <span>Super Trunfo</span>
                  </>)}
            </label>
          </div>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;

// teste
