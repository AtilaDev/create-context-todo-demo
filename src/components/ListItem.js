import * as React from 'react';
import { MyContext } from '../app-context';
import './ListItem.css';

class ListItem extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="layout-list-items message is-primary">
            <ul className="cursor">
              {context.todos.map((todo, idx) => (
                <li key={idx} className="items">
                  <div className="message-header">
                    {todo}
                    <button
                      className="delete"
                      onClick={() => context.removeItem(todo)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

ListItem.contextType = MyContext;

export default ListItem;
