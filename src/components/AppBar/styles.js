import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: '1 !important'
  },
  menuButton: {
    marginRight: theme.spacing(2) + 'px !important'
  },
  title: {
    display: 'none !important',
    [theme.breakpoints.up('sm')]: {
      display: 'block !important'
    }
  },
  search: {
    position: 'relative !important',
    borderRadius: theme.shape.borderRadius + 'px !important',
    backgroundColor: fade(theme.palette.common.white, 0.15) + ' !important',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25) + ' !important'
    },
    marginRight: theme.spacing(2) + 'px !important',
    marginLeft: '0 !important',
    width: '100% !important',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3) + 'px !important',
      width: 'auto !important'
    }
  },
  searchIcon: {
    width: theme.spacing(7) + ' !important',
    height: '100% !important',
    position: 'absolute !important',
    pointerEvents: 'none !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important'
  },
  inputRoot: {
    color: 'inherit !important'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7) + ' !important',
    transition: theme.transitions.create('width') + ' !important',
    width: '100% !important',
    [theme.breakpoints.up('md') + ' !important']: {
      width: '200 !important'
    }
  },
  sectionDesktop: {
    display: 'none !important',
    [theme.breakpoints.up('md') + ' !important']: {
      display: 'flex !important'
    }
  },
  sectionMobile: {
    display: 'flex !important',
    [theme.breakpoints.up('md') + ' !important']: {
      display: 'none !important'
    }
  }
}))

export default useStyles
