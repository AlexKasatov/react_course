import React, { useState, useEffect } from "react";

const Custom = () => {
    function useQuote() {
        useEffect(() => {
            console.log('Embrace the grind');
        })
    }

    useQuote()

  return <h1>Смотри в консоль!</h1>;
};

export default Custom;
