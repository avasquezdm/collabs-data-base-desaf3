import React from 'react';
import { BaseColaboradores } from '../../databases/BaseColaboradores';
import "./CollabList.css";

const CollabList = ({ collabs, searchTerm }) => {
  const filteredCollabs = [...BaseColaboradores, ...collabs].filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='collab-list'>
      <h2>Listado de colaboradores</h2>
      {filteredCollabs.map((colaborador) => (
        <div key={colaborador.id}>
          <p>{colaborador.nombre} - {colaborador.correo}</p>
        </div>
      ))}
    </div>
  );
}

export default CollabList