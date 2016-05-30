const React = require('react');
const ReactDOM = require('react-dom');

const TabContainer = require('./tab.js').TabContainer;
const Tab = require('./tab.js').Tab;

let emojicats = [
  ':video_game:', // games
  ':construction:', // in progress
  ':paperclip:', // bots
  ':wrench:', // tools
  ':skull:', // unfinished/prototype
  ':fire:' // featured
];

ReactDOM.render(
  <div id="page">
    <TabContainer id="header">
      <Tab link="#home">Home</Tab>
      <Tab link="#projects">Projects</Tab>
      <Tab link="#links">Links</Tab>
      <Tab link="#contact">Contact</Tab>
    </TabContainer>
  </div>,
  document.getElementById('root')
);
