import React from 'react'
import Typography from '@material-ui/core/Typography'
import { AppBar, useAuthUserContext } from '..'

const AccountPage = () => {
  const { user } = useAuthUserContext()

  return (
    <>
      <AppBar />
      <Typography variant="h1">{`Welcome ${user.firstName} ${user.lastName}`}</Typography>
    </>
  )
}

export { AccountPage }
