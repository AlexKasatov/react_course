import React, { useState } from "react";
import EmailForm from "./EmailForm";

//стейт-фулл компонент, родительский компонент EmailForm.js
//Практика Подьем Стейта №86

export default function Email() {
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div>
      <h2>Logged in as {email}</h2>
      <EmailForm email={email} onEmailChange={handleEmailChange} />
    </div>
  );
}
