import { useReducer } from 'react'
import createContextHook from 'constate'

const STORAGE_USER_KEY = 'auth_user'
const DEFAULT_USER_DETAIL = {
  isAuthenticated: false,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  mobilePhone: ''
}

const userFromStorage = JSON.parse(
  localStorage.getItem(STORAGE_USER_KEY) || JSON.stringify(DEFAULT_USER_DETAIL)
)

const initialState = {
  user: { ...userFromStorage },
  dialog: { ...{ isRegisterMode: true, isOpen: false } }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_AUTH': {
      return { ...state, ...action.payload }
    }
    case 'SET_USER': {
      return { ...state, ...action.payload }
    }
    case 'TOGGLE_DIALOG_MODE': {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          isRegisterMode: !state.dialog.isRegisterMode
        }
      }
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

const useAuthUserContext = createContextHook(() => {
  const localStorage = window.localStorage
  const [{ user, dialog }, dispatch] = useReducer(reducer, initialState)

  //#region - Dispatch Actions
  const setUserAuth = isAuthenticated => {
    if (!isAuthenticated) return

    dispatch({ type: 'SET_USER_AUTH', payload: { user: { isAuthenticated } } })
  }

  const setUserContext = userDetails => {
    if (
      !userDetails ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.username
    )
      return

    userDetails.isAuthenticated = true
    delete userDetails.password
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(userDetails))

    dispatch({
      type: 'SET_USER',
      payload: { user: userDetails }
    })
  }

  const deleteUserContext = () => {
    localStorage.removeItem(STORAGE_USER_KEY)
    dispatch({
      type: 'SET_USER',
      payload: { user: DEFAULT_USER_DETAIL }
    })
  }

  const toggleDialogMode = () => {
    dispatch({ type: 'TOGGLE_DIALOG_MODE' })
  }

  const toggleDialogState = () => {
    dispatch({ type: 'TOGGLE_DIALOG_STATE' })
  }
  //#endregion - Dispatch Actions

  return {
    user,
    dialog,
    setUserContext,
    deleteUserContext,
    setUserAuth,
    toggleDialogMode,
    toggleDialogState
  }
})

export default useAuthUserContext
