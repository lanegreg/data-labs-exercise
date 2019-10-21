import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  h1: {
    fontSize: '3.5em !important',
    fontFamily: '"Roboto Condensed" !important',
    fontWeight: '700 !important',
    lineHeight: '1em !important',
    margin: '0 !important',
    textTransform: 'uppercase !important',
    textShadow: '0 0 9px rgb(0,0,0,0.5) !important'
  },
  h2: {
    fontSize: '1.5em !important',
    fontWeight: 'bold !important',
    letterSpacing: '0.14994px !important'
  },
  button: {
    padding: '16px 40px !important',
    fontSize: '1.05rem !important',
    boxShadow: 'none !important',
    fontFamily: '"Roboto Condensed" !important',
    fontWeight: '700 !important',
    borderRadius: '3px !important',
    minWidth: '200px !important',
    display: 'block !important',
    margin: '24px auto 16px !important',
    color: '#fff !important',
    backgroundColor: '#ff3366 !important',
    '&:hover': {
      backgroundColor: '#e62958 !important'
    }
  },
  ledge: {
    width: '80px !important',
    height: '4px !important',
    margin: '4px auto 62px !important',
    display: 'block !important',
    backgroundColor: '#ff3366 !important'
  }
})

export default useStyles
