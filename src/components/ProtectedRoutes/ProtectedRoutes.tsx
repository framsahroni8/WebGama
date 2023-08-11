import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from 'utils/getAuth'

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}

const ProtectedRoutes = (props: ProtectedRouteType) => {
  // const { auth, user } = useAuth()

  //if the role required is there or not
    // return auth ? <Outlet /> : <Navigate to='/login' />
  }

export default ProtectedRoutes
