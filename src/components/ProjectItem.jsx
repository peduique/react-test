import React from 'react';

const ProjectItem = props => {
  return (
    <li className="project">
      <span className="project__number">{props.number}</span>
      <div className="project__control">
        <button className="btn-dropdown">
          <i className="icon-dots-horizontal-triple"></i>
        </button>
      </div>
      <h2 className="project__title">{props.title}</h2>
      <h3 className="project__client">{props.client_name}</h3>
      <span className="project__status">
        <span className="project__status__title">Active Stage:</span> {props.active_stage}
      </span>
    </li>
  );
}

export default ProjectItem;