import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100vw !important',
    height: '100vh !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    textAlign: 'center !important',
    color: '#fff !important',
    backgroundImage:
      'url(https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg)',
    backgroundSize: 'cover !important',
    backgroundPosition: 'center center !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundAttachment: 'fixed !important'
  },
  inner: {
    transform: 'translateY(-24px) !important'
  }
})

export default useStyles
