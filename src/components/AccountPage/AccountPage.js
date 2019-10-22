import React from 'react'
import { withRedButtonStyles } from './styles'
import { deleteUser } from '../../api/service'
import useAuthUserContext from '../../common/useAuthUserContext'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { AppBar } from '..'

const AccountPage = () => {
  const { user, deleteUserContext } = useAuthUserContext()
  const RedButton = withRedButtonStyles(Button)

  const handleDeleteAccount = () => {
    deleteUser(user.username)
    deleteUserContext()
  }

  return (
    <>
      <AppBar />
      <Box bgcolor="default.main" color="default.contrastText" p={2} m={1}>
        <Typography variant="h3">{`Welcome ${user.firstName} ${user.lastName}`}</Typography>
        <RedButton type="button" onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </RedButton>
      </Box>
    </>
  )
}

export { AccountPage }
