import { TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import s from './Players.module.css';

const Players = (props) => {
    let pagesOptions = [1, 2, 3, 4, 5, 6, 7, 8]
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return <div>
        <h2>Players</h2>
        <TableContainer>
            <Table>

                {props.players
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(p => (
                        <div className={s.playerArea}>
                            <div className={s.playerIcon}>
                                {p.first_name[0]}{p.last_name[0]}
                            </div>
                            <div className={s.playersName}>
                                <div>{p.first_name}</div>
                                <div>{p.last_name}</div>
                            </div>

                        </div>
                    ))}

            </Table>
            <TablePagination
                rowsPerPageOptions={pagesOptions}
                component="div"
                count={props.playersCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>

    </div>
}

export default Players;