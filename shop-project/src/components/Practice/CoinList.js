import React, { useState, useEffect } from "react";

const Coinlist = () => {
  const [coin, setCoin] = useState("");

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  function handleCoinChange(e) {
    setCoin(e.target.value);
  }

  return (
    <>
      <h3>Выбрать крипту</h3>
      <select onChange={handleCoinChange}>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        <option value="XRP">Ripple</option>
      </select>
      <h1>{coin}</h1>
    </>
  );
};

export default Coinlist;
