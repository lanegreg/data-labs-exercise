const ENDPOINT =
  'https://lbhqs85mg8.execute-api.us-west-2.amazonaws.com/dev/user'

export const registerUser = async userDetails => {
  //#region - Guard
  if (
    !userDetails ||
    !userDetails.firstName ||
    !userDetails.lastName ||
    !userDetails.mobilePhone ||
    !userDetails.username ||
    !userDetails.password
  )
    return
  //#endregion - Guard

  return await fetch(ENDPOINT, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userDetails)
  }).then(res => {
    if (res.ok) return { status: res.status, promise: res.json() }

    return { status: res.status, promise: res.text() }
  })
}

export const signinUser = async (username, password) => {
  //#region - Guard
  if (!username || !password) return
  //#endregion - Guard

  const url = `${ENDPOINT}/${username}/${password}`

  return await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) return { status: res.status, promise: res.json() }

    return { status: res.status, promise: res.text() }
  })
}

export const deleteUser = async username => {
  //#region - Guard
  if (!username) return
  //#endregion - Guard

  const url = `${ENDPOINT}/${username}`
  return await fetch(url, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) return { status: res.status, promise: res.json() }

    return { status: res.status, promise: res.text() }
  })
}
