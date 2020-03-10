import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import List from './components/List';
import './styles/index.scss';
import ReactPaginate from 'react-paginate';
import Loading from './components/Loading';

const App = () => {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchProjects = () => {
      setLoading(true);
      //TODO: remove
      let headers = { headers: new Headers({ "Authorization": `Basic ${btoa(`erfertq3:326fsehug`)}` })}
  
      fetch(`http://development.archix.com/api/projects?page=${page}&address=${address}`, headers)
        .then(response => response.json())
        .then(response => {
          setInfo(response);
          setPage(response.page);
          setLoading(false);
        });
    }

    fetchProjects();
  }, [page, address]);

  useEffect(() => {
    setPage(1);
  }, [address])

  const handleInput = ev => {
    if (ev.target.name === 'address') {
      setAddress(ev.target.value);
    }
  }

  return (
    <div className="container">
      {loading && <Loading />}
      {info && 
        <>
          <SearchForm 
            {...info.form} 
            onChangeInput={handleInput}
          />
          {info.projects ? (
            <>
              <List projects={info.projects} />
              <div className="control flex align-center space-between wrap">
                <div>Showing {info.showingStart} to {info.showingEnd} of {info.total} entries</div>
                {info.projects.length && 
                  <ReactPaginate
                    pageCount={parseInt(info.total) / parseInt(info.itemPerPage)}
                    pageRangeDisplayed={4}
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    onPageChange={(data) => setPage(data.selected + 1)}
                    containerClassName={'pagination justify-content-center m-4'}
                    pageLinkClassName={'pagination__button page-number'}
                    breakClassName={'page-number'}
                    previousLinkClassName={'pagination__button'}
                    nextLinkClassName={'pagination__button'}
                    activeLinkClassName={'active'}
                    forcePage={page - 1}
                  />
                }
              </div>
            </>
          ) : (
            'No results found'
          )
          }
        </>
      }
    </div>
  );
}

export default App;
