import * as React from 'react';
import FormInput from './FormInput';
import Header from './Header';
import ListItem from './ListItem';

const App = () => (
  <section className="hero is-dark is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <div className="box">
              <div className="field has-text-centered">
                <Header
                  title="Create Context ToDo - Demo"
                  subtitle="by Leandro Favre"
                />
                <FormInput />
                <ListItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
