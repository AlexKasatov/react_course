import { useState } from "react";

const useFetch = () => {
  const [loader, setLoader] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoader(false);
            return reject(data);
          }
          setLoader(false);
          resolve(data);
        })
        .catch((error) => {
          setLoader(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "Application/json" },
      })
        .then((response) => response.json)
        .then((data) => {
          if (!data) {
            setLoader(false);
            return reject(data);
          }
          setLoader(false);
          resolve(data);
        })
        .catch((error) => {
          setLoader(false);
          reject(error);
        });
    });
  }

  return { loader, get, post };
};

export default useFetch;
