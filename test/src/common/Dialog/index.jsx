import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, TextField } from '@mui/material';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { addUserData, editUserData } from '../../redux/actions';

export default function UserDialog({ toggle, fetchAgain = null, data = {} }) {

    const dispatch = useDispatch()

    const { getFieldProps, handleSubmit, ...formik } = useFormik({
        initialValues: {
            name: data?.name || "",
            email: data?.email || ""
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required()
        }),
        onSubmit: (values) => {
            onAddEditUser(values)
        }
    })

    const onAddEditUser = async (value) => {
        data?.id ? await dispatch(editUserData({ ...data, ...value })) : await dispatch(addUserData(data))
        await fetchAgain()
        toggle();
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
                {data?.id ? "Edit User" : "Add User"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box paddingTop={3} display="flex" flexDirection="column" gap="24px">
                        <TextField label="Name" {...getFieldProps("name")} />
                        <TextField label="Email" {...getFieldProps("email")} />
                    </Box>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle}>Cancel</Button>
                <Button onClick={handleSubmit} autoFocus>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}
