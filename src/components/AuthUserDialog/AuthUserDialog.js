import React, { useState } from 'react'
import { withGreenButtonStyles } from './styles'
import useAuthUserContext from '../../common/useAuthUserContext'
import { registerUser, signinUser } from '../../api/service'
import useForm from 'react-hook-form'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const PASSWORD_LENGTH = 6

const AuthUserDialog = () => {
  const GreenButton = withGreenButtonStyles(Button)
  const {
    dialog,
    setUserContext,
    toggleDialogState,
    toggleDialogMode
  } = useAuthUserContext()
  const { handleSubmit, register, errors } = useForm()

  const [message, setSnackbarMessage] = useState('')
  const [open, setSnackbarOpen] = useState(false)

  //#region - Handlers
  const onRegistrationSubmit = formValues => {
    formValues.username = formValues.email.split('@')[0]

    registerUser(formValues)
      .then(data => {
        if (data.status === 200) {
          data.promise.then(json => {
            setUserContext(json)
            setSnackbarMessage('Successfully registered!')
            setSnackbarOpen(true)
          })
        } else {
          data.promise.then(txt => {
            setSnackbarMessage(txt)
            setSnackbarOpen(true)
          })
        }
      })
      .catch(error => {
        console.error('error', error)
        setSnackbarMessage('Error while registering.')
        setSnackbarOpen(true)
      })

    toggleDialogState()
  }

  const onSigninSubmit = formValues => {
    signinUser(formValues.username, formValues.password)
      .then(data => {
        if (data.status === 200) {
          data.promise.then(json => {
            setUserContext(json)
            setSnackbarMessage('Successfully signed in!')
            setSnackbarOpen(true)
          })
        } else {
          data.promise.then(txt => {
            setSnackbarMessage(txt)
            setSnackbarOpen(true)
          })
        }
      })
      .catch(error => {
        console.error('error', error)
        setSnackbarMessage('Error while registering.')
        setSnackbarOpen(true)
      })

    toggleDialogState()
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
    setSnackbarMessage('')
  }
  //#endregion - Handlers

  //#region - Renderers
  const renderRegistrationDialog = (
    <>
      <DialogTitle>Create your new account</DialogTitle>
      <form onSubmit={handleSubmit(onRegistrationSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length > 1
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
              validate: value => value.length >= PASSWORD_LENGTH
            })}
          />
          {errors.password && errors.password.message}
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'flex-start', paddingLeft: '24px' }}
        >
          <Typography variant="body2">
            Already have an account?&nbsp;
            <Link
              component="button"
              variant="body2"
              style={{ verticalAlign: 'inherit' }}
              onClick={toggleDialogMode}
            >
              Sign in
            </Link>
          </Typography>
        </DialogActions>
        <DialogActions>
          <GreenButton type="submit">CREATE ACCOUNT</GreenButton>
        </DialogActions>
      </form>
    </>
  )

  const renderSigninDialog = (
    <>
      <DialogTitle>Sign in to your account</DialogTitle>
      <form onSubmit={handleSubmit(onSigninSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            id="username"
            name="username"
            label="User Name"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length > 4
            })}
          />
          {errors.username && errors.username.message}
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            autoComplete="on"
            inputRef={register({
              validate: value => value.length >= PASSWORD_LENGTH
            })}
          />
          {errors.password && errors.password.message}
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'flex-start', paddingLeft: '24px' }}
        >
          <Typography variant="body2">
            Don&rsquo;t have an account?&nbsp;
            <Link
              component="button"
              variant="body2"
              style={{ verticalAlign: 'inherit' }}
              onClick={toggleDialogMode}
            >
              Register
            </Link>
          </Typography>
        </DialogActions>
        <DialogActions>
          <GreenButton type="submit">Sign in</GreenButton>
        </DialogActions>
      </form>
    </>
  )
  //#endregion - Renderers

  return (
    <>
      <Dialog onClose={toggleDialogState} open={dialog.isOpen} maxWidth="xs">
        {dialog.isRegisterMode ? renderRegistrationDialog : renderSigninDialog}
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        onClose={handleSnackbarClose}
        autoHideDuration={5000}
        message={<span>{message}</span>}
      />
    </>
  )
}

export { AuthUserDialog }
