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
      <HeroImage className={classes.root}>
        <Typography variant="h1" className={classes.h1}>
          Upgrade Your Image
        </Typography>
        <Divider className={classes.ledge}></Divider>
        <Typography variant="h2" className={classes.h2}>
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
