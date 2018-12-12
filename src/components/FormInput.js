import * as React from 'react';
import { MyContext } from '../app-context';

class FormInput extends React.Component {
  state = {
    task: ''
  };

  handleOnClick = event => {
    event.preventDefault();
    const { task } = this.state;

    if (task !== '') {
      this.context.addTask(task);
      this.setState({ task: '' });
    }
  };

  capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  render() {
    const { task } = this.state;
    return (
      <form>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              value={task}
              placeholder="some task"
              onChange={event =>
                this.setState({ task: this.capitalize(event.target.value) })
              }
              required
            />
          </div>
        </div>
        <button
          className="button is-info is-outlined is-fullwidth"
          onClick={this.handleOnClick}
        >
          Add Task
        </button>
      </form>
    );
  }
}

FormInput.contextType = MyContext;

export default FormInput;
