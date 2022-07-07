import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    // const navigate = useNavigate()
    const isAutenticated = false;

  return (
    isAutenticated ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRouter