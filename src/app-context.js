import * as React from 'react';

export const MyContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    todos: [],
    addTask: task => this.setState({ todos: [...this.state.todos, task] }),
    removeItem: idx =>
      this.setState({
        todos: this.state.todos.filter(e => e !== idx)
      })
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
