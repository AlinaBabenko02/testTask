import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import s from './TeamsTable.module.css';
import axios from 'axios';

const TeamsTable = (props) => {
    let pagesOptions=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    // let teeams=axios.get('https://www.balldontlie.io/api/v1/teams').then((response)=>response.data.data);
    // let count=axios.get('https://www.balldontlie.io/api/v1/teams').then((response)=>response.data.meta.total_count);
    // console.log(teeams);
    //  console.log(count);
    // console.log("------------------");
    let result = [
        {
            full_name: "hih",
            city: 1,
            abbreviation: 2,
            conference: 3
        },
        {
            full_name: "ggg",
            city: 2,
            abbreviation: 3,
            conference: 4
        },
        {
            full_name: "rfr",
            city: 3,
            abbreviation: 5,
            conference: 6
        },
    ]
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);//0
    };


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow className={s.mainRow}>
                        <TableCell className={s.mainCell} >Name</TableCell>
                        <TableCell className={s.mainCell} >City</TableCell>
                        <TableCell className={s.mainCell} >Abbreviation</TableCell>
                        <TableCell className={s.mainCell} >Conference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.teams
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(t => (
                            <TableRow key={t.full_name}>
                                <TableCell>{t.full_name}</TableCell>
                                <TableCell>{t.city}</TableCell>
                                <TableCell>{t.abbreviation}</TableCell>
                                <TableCell>{t.conference}</TableCell>
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
    );

}

export default TeamsTable;

