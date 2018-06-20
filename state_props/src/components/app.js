import React from 'react';
import Exp from './exp';
import '../stylesheets/app.css';

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     c: 0
  //   };
  // }

  state = {
    c: 0
  };

  clickHandler = () => {
    this.setState(prevState => ({c: prevState.c+1}));
    // this.setState({c: 7});
  }

  render() {
    return (
      <center>
        <Exp t={this.state.c} />
        <button onClick={this.clickHandler}>Click</button>
      </center>
    );
  }
}

export default App;
