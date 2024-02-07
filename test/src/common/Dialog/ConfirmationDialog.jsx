import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../redux/actions';

export default function ConfirmationDialog({ toggle, data, fetchAgain }) {

    const dispatch = useDispatch()
    const onDelete = async () => {
        await dispatch(deleteUserData(data))
        await fetchAgain()
        toggle()
    }
    return (
        <Dialog
            open={true}
            onClose={toggle}
            fullWidth="md"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Are you sure, you want to delete this user ?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box paddingTop={3} display="flex" flexDirection="column" gap="24px">
                        <Typography>*This user will delete permanently!</Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle}>Close</Button>
                <Button onClick={onDelete} autoFocus>
                    Yes, Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}
