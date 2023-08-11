import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux/store'

export const useAuth = () => {
  // Get user from Redux store
  const loginState = useSelector((state: RootState) => state.login)

  if (loginState.isLoggedIn) {
    return {
      auth: true,
      user: loginState.user,
      token: loginState.token,
    }
  } else {
    return {
      auth: false,
      user: null,
      token: '',
    }
  }
}
