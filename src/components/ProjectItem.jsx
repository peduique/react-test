import React, { useEffect, useState, useRef } from 'react';

const ProjectItem = props => {
  const node = useRef();
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = e => {
    if (node.current.contains(e.target)) return;
    setShowOptions(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <li className="project">
      <span className="project__number">{props.number}</span>
      <div ref={node} className="project__control dropdown">
        <button className={`dropdown__btn ${showOptions && 'active'}`} onClick={() => setShowOptions(!showOptions)}>
          <i className="icon-dots-horizontal-triple"></i>
        </button>
        {showOptions && props.buttons && 
          <ul className="dropdown__list">
            {props.buttons.map((button, index) => 
              <li key={index}>
                <a href={button.url ? button.url : undefined} 
                  className={`menu-item ${button.class}`} 
                  id={button.id}>{button.name}</a>
              </li>  
            )}
          </ul>
        }
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