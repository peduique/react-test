import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import List from './components/List';
import './styles/index.scss';
import Loading from './components/Loading';

const App = () => {
  const headers = { headers: new Headers({ "Authorization": `Basic ${btoa(`erfertq3:326fsehug`)}` })}

  const ref = React.createRef();
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

  const handleChangePage = data => {
    setPage(data.selected + 1);
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
            <div ref={ref}>
              <ul className="view-template">
                <li>
                  <button className={`view-template__button active`}>
                    <i className="icon-th-large"></i>
                  </button>
                </li>
                <li>
                  <button className={`view-template__button`}>
                    <i className="icon-view_column"></i>
                  </button>
                </li>
              </ul>
              
              <List 
                info={info}
                onPageChange={handleChangePage}
              />
            </div>
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
