import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => { 
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if (user) {
        return children; 
    }

    return <Navigate to='/signIn' state={{ from: location.pathname }} />;
};

export default PrivateRoute;
