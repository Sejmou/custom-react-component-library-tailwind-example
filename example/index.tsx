import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'example-component-lib/dist/tailwind.css';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
