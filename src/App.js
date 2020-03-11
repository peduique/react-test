import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import List from './components/List';
import './styles/index.scss';
import ReactPaginate from 'react-paginate';
import Loading from './components/Loading';

const App = () => {
  const headers = { headers: new Headers({ "Authorization": `Basic ${btoa(`erfertq3:326fsehug`)}` })}

  const [page, setPage] = useState(1);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [searchAddress, setSearchAddress] = useState('');

  const fetchProjects = (type) => {
    setLoading(true);
    fetch(`http://development.archix.com/api/projects?page=${page}&address=${address}`, headers)
      .then(response => response.json())
      .then(response => setInfo(response))
      .then(response => setLoading(false))
  }

  useEffect(() => {
    fetchProjects();
  }, [page]);

  const handleInput = ev => {
    if (ev.target.name === 'address') setSearchAddress(ev.target.value);
  }

  const handleSubmitForm = ev => {
    ev.preventDefault();
    setPage(1);
    setAddress(searchAddress);
    fetchProjects();
  }

  return (
    <div className="container">
      {loading && <Loading />}
      {info && 
        <>
          <SearchForm 
            {...info.form} 
            onChangeInput={handleInput}
            onSubmitForm={handleSubmitForm}
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
