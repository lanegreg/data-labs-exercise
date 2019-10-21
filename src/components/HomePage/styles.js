import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  h1: {
    fontSize: '3.5em',
    fontFamily: 'Roboto Condensed',
    fontWeight: 700,
    lineHeight: '1em',
    margin: 0,
    textTransform: 'uppercase',
    textShadow: '0 0 9px rgb(0,0,0,0.5)'
  },
  h2: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    letterSpacing: '0.14994px'
  },
  button: {
    padding: '16px 40px',
    fontSize: '1.05rem',
    boxShadow: 'none',
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    borderRadius: '3px',
    minWidth: '200px',
    display: 'block',
    margin: '24px auto 16px',
    color: '#fff',
    backgroundColor: '#ff3366',
    '&:hover': {
      backgroundColor: '#e62958'
    }
  },
  ledge: {
    width: '80px',
    height: '4px',
    margin: '4px auto 62px',
    display: 'block',
    backgroundColor: '#ff3366'
  }
})

export default useStyles
