import { Navigate } from 'react-router-dom';
import { useGlobalState } from './GlobalState';


function Protected({ children }) {
   const { userId, setUserId } = useGlobalState();

  if (!userId) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;