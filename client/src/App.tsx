import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
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
123
    </>
  );
}

export default App;
