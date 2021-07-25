import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/auth.service';
import pathnames from '../utils/pathnames';

/** 
 * Check that the user is logged in, if he is not, it redirects him to the login
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
    }, [history]);

    return;
}

export default useCheckSession;