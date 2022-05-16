import { useState } from "react";
import BTable from 'react-bootstrap/Table';
import { KTableProps, SearchProps } from "../types";
import { useTable, useSortBy, usePagination, useGlobalFilter, useAsyncDebounce } from "react-table";
import { AiOutlinePlus, AiOutlineDown, AiOutlineUp, AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}:SearchProps) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Buscar:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Escribe lo que deseas buscar..."
      />
    </span>
  )
}

const KationTable = ({ columns, data } : KTableProps): JSX.Element => {
	const { 
        getTableProps, 
        headerGroups,
        prepareRow,
        page,
        pageOptions,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
      )
    
      return (
        <>
          <div className="topTable">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />

            {/* <div className="newResidence"> */}
              <button type="button" className="btn">
                <AiOutlinePlus /> Nuevo Domicilio
              </button>
            {/* </div> */}
          </div>
          <BTable className="BTable" responsive striped hover size="sm" {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    const { key, ...restHeaderGroupProps } =
                    headerGroup.getHeaderGroupProps();
                    return (
                        <tr key={key} {...restHeaderGroupProps}>
                            {headerGroup.headers.map((column) => {
                                const { key } = column.getHeaderProps();
                                const { ...restColumnSort } = column.getSortByToggleProps();
                                return (
                                <th key={key} {...restColumnSort}>
                                    {column.render("Header")}
                                    <span className="SortWrapper">
                                      {column.isSorted
                                        ? column.isSortedDesc
                                          ? <AiOutlineDown />
                                          : <AiOutlineUp />
                                        : ''}
                                    </span>
                                </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody>
              {page.map((row) => {
                prepareRow(row)
                const { key, ...restRowProps } = row.getRowProps();
                return (
                    <tr key={key} {...restRowProps}>
                        {row.cells.map((cell) => {
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                            <td key={key} {...restCellProps}>
                                {cell.render("Cell")}
                            </td>
                        );
                        })}
                    </tr>
                )
              })}
            </tbody>
          </BTable>
          <div className="tablePagination">
              <p>{pageIndex + 1}-{pageSize} de {pageOptions.length}</p>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                <AiOutlineLeft />
              </button>
              {' '}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                <AiOutlineRight />
              </button>
          </div>
        </>
      )
};

export default KationTable;