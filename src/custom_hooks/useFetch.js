import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  async function getDAtaFromApi() {
    await axios.get(url).then((data) => setData(data.data));
  }

  useEffect(() => {
    getDAtaFromApi();
  }, []);

  return data;
}

export default useFetch;
