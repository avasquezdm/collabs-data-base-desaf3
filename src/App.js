import { useState } from 'react';
/* Darle el estilo a la aplicación utilizando CSS. El estilo aplicado debe ser coherente con la aplicación. (1 Puntos) --> Cada componente tiene su css */
import CollabList from './components/CollabList/CollabList'; // Cargar los datos base desde un archivo e importarlos en el archivo App.js
import Header from './components/Header/Header';
import Input from './components/Input/Input';

function App() {
  const [collabs, setCollabs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Agregar colaboradores a la lista. (3 Puntos)
  const addCollab = (newCollab) => {
    setCollabs([...collabs, newCollab]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch}></Header> {/* Crear una búsqueda de colaboradores por nombre. (3 Puntos). */}
      <Input addCollab={addCollab}></Input>
      <CollabList collabs={collabs} searchTerm={searchTerm}></CollabList> {/* mostrarlos (de la forma que fue enseñado en la guía). (3 Puntos) */}
    </div>
  );
}

export default App;
