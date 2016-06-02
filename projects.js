// call github api

let get = function(url, responseType) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      resolve(xhr.response);
    });
    xhr.addEventListener('error', () => {
      reject();
    });
    if(responseType) {
      xhr.responseType = responseType;
    }
    xhr.open('get', url);
    xhr.send();
  });
  return promise;
}

module.exports.getProjects = function() {
  return get('https://api.github.com/users/Objelisks/repos', 'json');
}

var Emoji = React.createClass({
  render: function() {
    return (
      <img className="emoji" src={this.props.src}></img>
    )
  }
});

var ProjectCard = React.createClass({
  render: function() {
    let actions = this.props.actions.map((action) => { return (
      <div className="card-action"><a href={action.link}>{action.text}</a></div>
    )});
    let text = this.props.text.split(':');
    let emojiedText = text.map((str, i) => i%2===0 ? str : <Emoji src={'./emojis/' + str + '.png'}></Emoji>);
    return (
      <div className="project-card">
        <h2 className="card-title">{this.props.title}</h2>
        <img className="card-img" src={'./img/' + this.props.img}></img>
        <div className="card-footer">
          <p className="card-text">{emojiedText}</p>
          <div className="card-actions">
            {actions}
          </div>
        </div>
      </div>
    )
  }
});

module.exports.ProjectCard = ProjectCard;

var CardList = React.createClass({
  render: function() {
    let columns = [];
    let columnChildren = [];
    this.props.children.forEach((child, i) => {
      let col = i%this.props.columns;
      columnChildren[col] = columnChildren[col] === undefined ? [] : columnChildren[col];
      columnChildren[col].push(child);
    });
    for(let i=0; i<this.props.columns; i++) {
      columns.push(<div className="card-column">{columnChildren[i]}</div>);
    }

    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="card-list">{columns}</div>
      </div>
    )
  }
});

module.exports.CardList = CardList;
