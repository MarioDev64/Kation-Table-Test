export interface IContacts {
    id: number,
    first_name: string,
    last_name: string,
    phone: string,
    residence_type: string,
    street: string,
    street_number: string,
    sector: string,
    province: string,
    status: string
}

export interface KTableProps {
    columns: any,
    data: any
}

export interface SearchProps {
    preGlobalFilteredRows: any,
    globalFilter: any,
    setGlobalFilter: any
}


