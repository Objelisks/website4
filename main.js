const React = require('react');
const ReactDOM = require('react-dom');

const TabContainer = require('./tab.js').TabContainer;
const Tab = require('./tab.js').Tab;
const getProjects = require('./projects.js').getProjects;
const ProjectCard = require('./projects.js').ProjectCard;
const CardList = require('./projects.js').CardList;

let emojicats = [
  ':video_game:', // games
  ':construction:', // in progress
  ':paperclip:', // bots
  ':wrench:', // tools
  ':skull:', // unfinished/prototype
  ':fire:' // featured
];
/*
ReactDOM.render(
  <TabContainer id="header">
    <Tab link="#home">Home</Tab>
    <Tab link="#projects">Projects</Tab>
    <Tab link="#links">Links</Tab>
    <Tab link="#contact">Contact</Tab>
  </TabContainer>,
  document.getElementById('root')
);
*/

let sortCategories = function(projects) {
  let categories = {};
  emojicats.forEach((category) => {
    categories[category] = projects.filter((project) => {
      return project.desc.indexOf(category) !== -1;
    });
  });
  return categories;
};

let project1Actions = [{text:'link', link:'#hello'}, {text:'press', link:'#also'}];

getProjects()
.then((data) => {
  let projects = data.map((repo) => { return {name: repo.name, link: repo.html_url, desc: repo.description}; });
  let categories = sortCategories(projects);
  let keys = Object.keys(categories);
  let lists = keys.map((key) => { return(
    <CardList title={key} columns="3">
      {categories[key].map((project) => { return(
        <ProjectCard actions={project1Actions} text={project.desc} title={project.name} img="astro.png"></ProjectCard>
      ); })}
    </CardList>
  ); });
  ReactDOM.render(
    <div>{lists}</div>,
    document.getElementById('root')
  );
});
/*
let project1Actions = [{text:'link', link:'#hello'}, {text:'press', link:'#also'}];

ReactDOM.render(
  <CardList columns="2">
    <ProjectCard actions={project1Actions} text="lorem ipsum dolor sit amor more words wrap around width" title="hello world" img="astro.png"></ProjectCard>
    <ProjectCard actions={project1Actions} text="lorem ipsum dolor sit amor more words wrap around width" title="hello world" img="astro.png"></ProjectCard>
    <ProjectCard actions={project1Actions} text="lorem ipsum dolor sit amor more words wrap around width" title="hello world" img="astro.png"></ProjectCard>
    <ProjectCard actions={project1Actions} text="lorem ipsum dolor sit amor more words wrap around width" title="hello world" img="astro.png"></ProjectCard>
    <ProjectCard actions={project1Actions} text="lorem ipsum dolor sit amor more words wrap around width" title="hello world" img="astro.png"></ProjectCard>
  </CardList>,
  document.getElementById('root')
);
*/
