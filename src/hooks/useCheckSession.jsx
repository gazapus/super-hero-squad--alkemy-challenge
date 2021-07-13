import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/auth.service';
import pathnames from '../utils/pathnames';
/** 
 */
function useCheckSession() {
    const history = useHistory();

    useEffect(() => {
        function checkSession() {
            if(!authService.getToken()) history.push(pathnames.login);
        }
        window.addEventListener('popstate', checkSession);
        checkSession();
        return () => window.removeEventListener('popstate', checkSession);
    }, []);

    return;
}

export default useCheckSession;