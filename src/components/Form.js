import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome do input:
            <input
              type="text"
              data-testid="name-input"
            />
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
