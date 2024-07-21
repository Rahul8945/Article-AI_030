import { Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ element}) => {
    const { user } = useAuth();
    return user ? element : <Navigate to="/login" />;
  };