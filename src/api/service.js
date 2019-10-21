const ENDPOINT =
  'https://lbhqs85mg8.execute-api.us-west-2.amazonaws.com/dev/user'

export const getUser = async userDetails => {
  //#region - Guard
  if (!userDetails || !userDetails.username || !userDetails.password) return
  //#endregion - Guard

  return await fetch(
    `ENDPOINT/${userDetails.username}/${userDetails.password}`,
    {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json())
}

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
  }).then(res => res.json())
}
