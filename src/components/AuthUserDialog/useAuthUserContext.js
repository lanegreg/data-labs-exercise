import { useReducer } from 'react'
import createContextHook from 'constate'

const STORAGE_USER_KEY = 'auth_user'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_AUTH': {
      return { ...state, ...action.payload }
    }
    case 'SET_USER': {
      return { ...state, ...action.payload }
    }
    case 'SET_DIALOG_MODE': {
      return { ...state, ...action.payload }
    }
    case 'TOGGLE_DIALOG_STATE': {
      return {
        ...state,
        dialog: { ...state.dialog, isOpen: !state.dialog.isOpen }
      }
    }
    default:
      return state
  }
}

const useAuthUser = () => {
  const localStorage = window.localStorage

  const userFromStorage = JSON.parse(
    localStorage.getItem(STORAGE_USER_KEY) ||
      JSON.stringify({
        isAuthenticated: false,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        mobilePhone: ''
      })
  )

  const initialState = {
    user: { ...userFromStorage },
    dialog: { ...{ mode: 'register', isOpen: false } }
  }

  const [{ user, dialog }, dispatch] = useReducer(reducer, initialState)

  //#region - Dispatch Actions
  const setUserAuth = isAuthenticated => {
    if (!isAuthenticated) return

    dispatch({ type: 'SET_USER_AUTH', payload: { user: { isAuthenticated } } })
  }

  const setUser = userDetails => {
    if (
      !userDetails ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.username ||
      !userDetails.email ||
      !userDetails.mobilePhone
    )
      return

    const user = {
      isAuthenticated: true,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      username: userDetails.username,
      email: userDetails.email,
      mobilePhone: userDetails.mobilePhone
    }
    console.log(user)
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user))

    dispatch({
      type: 'SET_USER',
      payload: { user }
    })
  }

  const setDialogMode = mode => {
    const modes = ['signin', 'register']
    if (!mode || !!modes.filter(m => m === mode).length) return

    dispatch({ type: 'SET_DIALOG_MODE', payload: { dialog: { mode } } })
  }

  const toggleDialogState = () => {
    dispatch({ type: 'TOGGLE_DIALOG_STATE' })
  }
  //#endregion - Dispatch Actions

  console.log('AuthUser', user)
  console.log('Dialog', dialog)
  return {
    user,
    dialog,
    setUser,
    setUserAuth,
    setDialogMode,
    toggleDialogState
  }
}

export const useAuthUserContext = createContextHook(useAuthUser)
