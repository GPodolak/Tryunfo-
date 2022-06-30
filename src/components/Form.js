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
      // hasTrunfo
      // isSaveButtonDisabled,
      // onInputChange
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            <input
              type="textArea"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>

          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>

          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>

          <label htmlFor="save-button">
            <input
              type="button"
              data-testid="save-button"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="trunfo-input">
            <input
              type="checkBox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              value={ cardTrunfo }
            />
          </label>

          <label htmlFor="rare-input">
            <input
              type="select"
              //   data-testid="rare-input"
              onChange={ onInputChange }
              value={ cardRare }
            />
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
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
  // hasTrunfo: propTypes.bool.isRequired,
  // isSaveButtonDisabled: propTypes.bool.isRequired,
  // onInputChange: propTypes.func.isRequired,
  // onSaveButtonClick: propTypes.func.isRequired
};

export default Form;
