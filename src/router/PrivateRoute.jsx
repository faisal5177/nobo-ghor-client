import { Navigate, useLocation } from 'react-router-dom';
import { useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (user) {
        return children
    }

    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;