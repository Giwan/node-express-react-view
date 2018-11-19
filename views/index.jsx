var React = require("react");
var DefaultLayout = require("./layouts/default");
var Header = require("./title");

class Index extends React.Component {
  render() {
    return(
      <DefaultLayout title="React View Engine">
        <Header>{this.props.title}</Header>
      </DefaultLayout>
    );
  }
}

module.exports = Index;