import React from 'react';
import ProjectItem from './ProjectItem';
import ReactPaginate from 'react-paginate';

const List = props => {
  return (
    <>
      <ul className="projects">
        {props.info.projects.map(project => <ProjectItem {...project} key={project.number} />)}
      </ul>

      <div className="control flex align-center space-between wrap">
        <div>Showing {props.info.showingStart} to {props.info.showingEnd} of {props.info.total} entries</div>

        {props.info.projects.length && 
          <ReactPaginate
            pageCount={parseInt(props.info.total) / parseInt(props.info.itemPerPage)}
            marginPagesDisplayed={2}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            onPageChange={props.onPageChange}
            containerClassName={'pagination justify-content-center m-4'}
            pageLinkClassName={'pagination__button page-number'}
            breakClassName={'page-number'}
            previousLinkClassName={'pagination__button'}
            nextLinkClassName={'pagination__button'}
            activeLinkClassName={'active'}
            forcePage={props.info.page - 1}
          />
        }
      </div>      
    </>
  )
}

export default List;