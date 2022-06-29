import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description-input">
            <input
              type="textArea"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="save-button">
            <input
              type="button"
              data-testid="save-button"
            />
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
