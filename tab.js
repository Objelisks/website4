var Tab = React.createClass({
  render: function() {
    return (
      <div><h1><a href={this.props.link}>{this.props.children}</a></h1></div>
    )
  }
});

module.exports.Tab = Tab;

var TabContainer = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports.TabContainer = TabContainer;
