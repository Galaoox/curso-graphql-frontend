import { DataGrid } from '@mui/x-data-grid';

interface Props {
    columns: any[],
    rows: any[]
}

const Datatable: React.FC<Props> = (props) => {
    const { columns, rows } = props;

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id}
            />
        </div>
    );
}

export default Datatable;