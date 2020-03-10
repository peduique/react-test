import React from 'react';
import ProjectItem from './ProjectItem';

const List = props => {
  return (
    <ul className="projects">
      {props.projects.map(project => <ProjectItem {...project} key={project.number} />)}
    </ul>
  )
}

export default List;