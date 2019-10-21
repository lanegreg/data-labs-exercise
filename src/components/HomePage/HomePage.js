import React from 'react'
import useStyles from './styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {
  AppBar,
  HeroImage,
  Divider,
  AuthUserDialog,
  useAuthUserContext
} from '..'

export const HomePage = () => {
  const classes = useStyles()
  const { toggleDialogState } = useAuthUserContext()

  return (
    <>
      <AppBar />
      <HeroImage>
        <Typography className={classes.h1} variant="h1">
          Upgrade Your Image
        </Typography>
        <Divider className={classes.ledge}></Divider>
        <Typography className={classes.h2} variant="h2">
          Receive secret offers up to 40% off the best cosmetic products.
        </Typography>
        <Button onClick={toggleDialogState} className={classes.button}>
          Register
        </Button>
        <Typography variant="subtitle1">Discover the experience</Typography>
      </HeroImage>
      <AuthUserDialog />
    </>
  )
}
