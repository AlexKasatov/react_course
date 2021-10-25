import React, { useEffect, useState } from "react";
//practice 96

export default function Multibrand() {
  const [scrip, setScrip] = useState(Math.random());

  function handleOnLoad() {
    console.log("Ей нужны бэнгеры, а я только отрендерил");
  }

  useEffect(() => {
    window.addEventListener("load", handleOnLoad);
    return () => {
      window.removeEventListener("load", handleOnLoad);
    };
  }, []);

  return (
    <>
      <button onClick={() => setScrip(Math.random())}>Ререндер</button>
    </>
  );
}
