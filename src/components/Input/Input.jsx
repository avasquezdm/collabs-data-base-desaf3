import React, { useState } from 'react';
import "./Input.css";

const Input = ({ addCollab }) => {
  const [collabName, setCollabName] = useState("");
  const [collabEmail, setCollabEmail] = useState("");

  const setValue = (e) => {
    if (e.target.id === "collab-name") {
      setCollabName(e.target.value);
    } else if (e.target.id === "collab-email") {
      setCollabEmail(e.target.value);
    }
  };

  const collabAdd = (e) => {
    e.preventDefault();
    const newCollab = {
      id: Math.random().toString(),
      nombre: collabName,
      correo: collabEmail,
    };
    if (collabName !== "" && collabEmail !== ""){
    addCollab(newCollab);
    setCollabName("");
    setCollabEmail("");}
    else {
        alert("¡Debes agregar ambos datos!")
    }
  };

  return (
    <form className='container' onSubmit={(e) => collabAdd(e)}>
      <div className='container-item'>
        <label>
          Nombre del colaborador
        </label>
        <input
          type="text"
          id="collab-name"
          name="name"
          placeholder="Ingresa el nombre del colaborador"
          value={collabName}
          onChange={(e) => setValue(e)} />
      </div>
      <div className='container-item'>
        <label>
          Correo del colaborador
        </label>
        <input
          type="email"
          id="collab-email"
          name="email"
          placeholder="Ingresa el correo del colaborador"
          value={collabEmail}
          onChange={(e) => setValue(e)} />
      </div>
      <button type="submit">Agregar colaborador</button>
      <hr />
    </form>
  );
};

export default Input;
