import React from 'react'
import useForm from 'react-hook-form'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useAuthUserContext } from './useAuthUserContext'
import { registerUser } from '../../api/service'

const AuthUserDialog = () => {
  const { dialog, setUser, toggleDialogState } = useAuthUserContext()
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = inputVals => {
    inputVals.username = inputVals.email.split('@')[0]
    console.log(inputVals)

    registerUser(inputVals)
      .then(res => {
        setUser(inputVals)
        console.log('regUser', res)
      })
      .catch(() => {
        //show error
      })

    toggleDialogState()
  }

  return (
    <Dialog onClose={toggleDialogState} open={dialog.isOpen}>
      <DialogTitle>Create your new account</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length > 2
            })}
          />
          {errors.firstName && errors.firstName.message}
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length > 2
            })}
          />
          {errors.lastName && errors.lastName.message}
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            autoComplete="on"
            inputRef={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address'
              }
            })}
          />
          {errors.email && errors.email.message}
          <TextField
            id="mobilePhone"
            name="mobilePhone"
            label="Mobile Phone"
            type="tel"
            fullWidth
            autoComplete="on"
            inputRef={register({
              required: 'Required',
              pattern: {
                value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/i,
                message: 'invalid phone'
              }
            })}
          />
          {errors.mobilePhone && errors.mobilePhone.message}
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length > 7
            })}
          />
          {errors.password && errors.password.message}
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            CREATE ACCOUNT
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export { AuthUserDialog }
