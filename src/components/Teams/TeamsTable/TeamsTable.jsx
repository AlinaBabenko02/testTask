import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import s from './TeamsTable.module.css';

const TeamsTable = (props) => {
    let pagesOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    let result = props.myTeams.concat(props.teams)
    return (
        <div> {props.myTeams.full_name}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow className={s.mainRow}>
                            <TableCell><p className={s.mainCell}>Name</p></TableCell>
                            <TableCell><p className={s.mainCell} >City</p></TableCell>
                            <TableCell><a className={s.mainCell} >Abbreviation</a></TableCell>
                            <TableCell><p className={s.mainCell} >Conference</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(t => (
                                <TableRow key={t.full_name}>
                                    <TableCell><p className={s.nameCell}>{t.full_name}</p></TableCell>
                                    <TableCell>{t.city}</TableCell>
                                    <TableCell>{t.abbreviation}</TableCell>
                                    {(t.conference === "East")
                                        ? <TableCell><p className={s.greenBadge}> {t.conference}</p></TableCell>
                                        : <TableCell><p className={s.redBadge}> {t.conference}</p></TableCell>
                                    }
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={pagesOptions}
                    component="div"
                    count={props.teamsCount}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}

export default TeamsTable;

