import React from 'react';

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clicksCount : 0};
    this.clicked = this.clicked.bind(this);
  }

  clicked () {
    let newClicksCount = this.state.clicksCount + 1;
    this.setState({clicksCount: newClicksCount});
  }

  render() {
    return (
      <div>
        Clicks : <span>{this.state.clicksCount}</span>
        <div><button onClick={this.clicked}>Click Me Button</button></div>
      </div>
    );
  }

}

export default MainComponent;