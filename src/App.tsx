import { useState, useEffect, useCallback, useMemo } from "react";
import { IContacts } from "./types";
import TitleNavbar from "./shared/TitleNavbar";
import KationTable from "./components/KationTable";

function App() {
  
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const columnsConfig = useMemo(() => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'NOMBRE',
            accessor: 'first_name',
          },
          {
            Header: 'APELLIDO',
            accessor: 'last_name',
          },
          {
            Header: 'PERSONAL NO.',
            accessor: 'phone',
          },
          {
            Header: 'TIPO DOMICILIO',
            accessor: 'residence_type',
          },
          {
            Header: 'CALLE',
            accessor: 'street',
          },
          {
            Header: 'NUMERO',
            accessor: 'street_number',
          },
          {
            Header: 'SECTOR',
            accessor: 'sector',
          },
          {
            Header: 'PROVINCIA',
            accessor: 'province',
          },
          {
            Header: 'ESTADO',
            accessor: 'status',
          },
        ],
      },
    ], []);
    
  const requestContacts = useCallback(async () => {
    const response = await fetch('http://localhost:3001/contacts');
    const data = await response.json();
    setContacts([...data]);
  }, []);

  useEffect(() => {
    requestContacts();
  }, []);

  return (
    <div className="App">
     <TitleNavbar />
      <div className="container">
        <div className="Subtitle">
          <h5>Consulta Cliente Domicilio</h5>
        </div>
        <KationTable columns={columnsConfig} data={contacts} />
      </div>
    </div>
  );
}

export default App;
