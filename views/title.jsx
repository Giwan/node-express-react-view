var React = require("react");

class Title extends React.Component{ 
  render() { 
    return(
      <header>
        <div>{this.props.children}</div>
      </header>
    );
  }
}

module.exports = Title;