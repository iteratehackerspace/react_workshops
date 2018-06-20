import React from 'react';

class Exp extends React.Component {

  state = {
    exp: 0
  };

  clickHandler = () => {
    this.setState(prevState => ({exp: prevState.exp + 1}));
  }

  render(){
    const {t} = this.props; // const t = this.props.t;
    const {exp} = this.state;
    return(
      <div>
        <span>{t ** exp}</span>
        <button onClick={this.clickHandler}>Raise exp</button>
      </div>
    );
  }
}

export default Exp;