import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { fetchUsers } from '../../redux/actions';
import UserDialog from '../../common/Dialog';
import ConfirmationDialog from '../../common/Dialog/ConfirmationDialog';

export default function Users() {

    const data = useSelector(state => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isDelete, setIsDelete] = useState(false)
    const toggleDelete = () => {
        isDelete && setSelected(null)
        setIsDelete(!isDelete)
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        isOpen && setSelected(null)
        setIsOpen(!isOpen)
    }

    const [selected, setSelected] = useState(null)

    const onEditUser = (data) => {
        setSelected(data)
        toggle()
    }

    const onDeleteUser = (data) => {
        setSelected(data)
        toggleDelete()
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    return (
        <>
            <Box width="80%" margin="auto" paddingY={5}>
                <Box display="flex" gap="12px">
                    <Button variant='contained' onClick={toggle}>Add</Button>
                    <Button variant='outlined' onClick={() => navigate("/")}>Go Home</Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.loading ? (data?.users?.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">
                                        <Box display="flex" gap="12px" justifyContent="flex-end">
                                            <Button onClick={() => onEditUser(row)}>Edit</Button>
                                            <Button onClick={() => onDeleteUser(row)}>Delete</Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))) : <div sx={{ display: 'flex', width: "100%", justifyContent: "center" }}>
                                <CircularProgress />
                            </div>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {
                isOpen && <UserDialog toggle={toggle} data={selected} fetchAgain={() => dispatch(fetchUsers())} />
            }
            {
                isDelete && <ConfirmationDialog toggle={toggleDelete} data={selected} fetchAgain={() => dispatch(fetchUsers())} />
            }
        </>
    )
}
