import React, { useEffect, useState } from "react";

export default function Scroll() {
  const [state, setState] = useState(Math.random());

  function handleScroll(e) {
    console.log(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const duplicateItems = Array.from({ length: 50 });

  return (
    <>
      <button onClick={() => setState(Math.random())}>Ререндер</button>
      <ul>
        {duplicateItems.map((item, index) => (
          <li key={index}>Jacobs by Marc Jacobs for Marc by Marc Jacobs.</li>
        ))}
      </ul>
    </>
  );
}
