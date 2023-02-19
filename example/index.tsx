import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@sejmou/example-react-component-lib-tailwind/dist/tailwind.css';
import { Thing } from '@sejmou/example-react-component-lib-tailwind';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
