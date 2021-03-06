import React from 'react'
import useAuthUserContext from '../../common/useAuthUserContext'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { AppBar } from '..'

const ProfilePage = () => {
  const { user } = useAuthUserContext()

  return (
    <>
      <AppBar />
      <Box bgcolor="default.main" color="default.contrastText" p={2} m={1}>
        <Typography variant="h3">{`Welcome ${user.firstName} ${user.lastName}`}</Typography>
      </Box>
    </>
  )
}

export { ProfilePage }
