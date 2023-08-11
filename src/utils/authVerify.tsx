import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux/store'

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

interface AuthVerifyProps {
  logout: () => void
}

const AuthVerify = (props: AuthVerifyProps) => {
  const location = useLocation()
  const loginState = useSelector((state: RootState) => state.login)
  useEffect(() => {
    if (loginState && loginState.token) {
      const decodedJwt = parseJwt(loginState.token)

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logout()
      }
    }
  }, [location, loginState, props])

  return <></>
}

export default AuthVerify
