import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.scss';

function App() {
  class MyHeader extends React.Component {
    render() {
      return(
        <div>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </div>
      );
    }
  }
  ReactDOM.render(<MyHeader />, document.getElementById('root'));
}
export default App;
