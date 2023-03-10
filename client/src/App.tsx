import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
import Search from './Component/Search';
import Table from './Component/Table';
const BASE_URL = process.env.REACT_APP_API_URL

type Sort = {
  sort: string,
  order: string
}

const DEFAULT_FILTER = {
  sort: "rating",
  order: "desc"
}


function App() {
  const [sort, setSort] = useState<Sort>({ ...DEFAULT_FILTER })
  const [data, setData] = useState<Object>({})
  const [page, setPage] = useState<Number>(1)
  const [filterGenre, setFilterGenre] = useState<Object>({})
  const [search, setSearch] = useState<string>("")

  const handleGetAllData = async () => {
    try {
      const url = `${BASE_URL}?page=${page}&sort=${sort.sort},${sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
      const { data } = await axios.get(url);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetAllData()
  }, [page, search, sort, filterGenre])
  console.log(data)
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="head">
            <img src="./images/logo.png" alt="logo" className="logo" loading="lazy" />
            {/* <Search setSearch={(search:string) => setSearch(search)} /> */}
          </div>
          <div className="body">
            {/* <div className="table_container">
              <Table data={data.data ? data.data : []} />
              <Pagination
                page={page}
                limit={data.limit ? data.limit : 0}
                total={data.total ? data.total : 0}
                setPage={(page) => setPage(page)}
              />
            </div>
            <div className="filter_container">
              <Sort sort={sort} setSort={(sort) => setSort(sort)} />
              <Genre
                filterGenre={filterGenre}
                genres={data.genres ? data.genres : []}
                setFilterGenre={(genre) => setFilterGenre(genre)}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
