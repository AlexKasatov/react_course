import { useState, useEffect } from "react";

const Bitcoin = () => {
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState(true)

  useEffect(() => {
    if (currency) {
        setLoader(true)
      fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setPrice(data.bpi[currency].rate);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setLoader(false);
        });
    }
  }, [currency]);
  
  function handleButtonClick() {
      setValue(false)
  }

  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
  }

  return (
    <>
      <h2>Курс биткоина</h2>
      {loader && <p>Loading...</p>}
      <select disable={loader} onChange={handleCurrencyChange}>
        <option value="">Выберите валюту</option>
        <option value="USD">Доллар</option>
        <option value="EUR">Евро</option>
        <option value="RUB">Рубль</option>
      </select>
      <h3>{price}</h3>
    </>
  );
};

export default Bitcoin;
