import { Routes, Route, Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS } from './queries/character.queries';
import { useMemo } from 'react';
import Datatable from './components/Datatable';
import { CircularProgress } from '@mui/material';

function App() {

  const { loading, error, data } = useQuery(GET_CHARACTERS);
  // Almacena en cache la data obtenida 
  const cacheMutateData = useMemo(() => {
    if (loading || error) return null
    return data
  }, [loading, error, data]);

  if (loading) return <CircularProgress color="success" />
  if (error) return <h1>Ha ocurrido un error</h1>
  // como la data ya existe procedo a modificarla
  const mutatedData = (() => {
    return data.getCharacters as any[];
  })()

  const columns = [
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'race', headerName: 'Raza', flex: 1 },
    { field: 'gender', headerName: 'Genero', flex: 1 },
  ];

  return (
    <div>
      <h1>Listado</h1>
      <Datatable columns={columns} rows={mutatedData} />

    </div>
  )
}

export default App
