import React, { useContext } from 'react';

import UserContext from '../context/UserContext';
import Login from '../components/Login/Login';

function Auth(props) {
    const userLoginObject = useContext(UserContext);


    return(
        <>
            { !userLoginObject.loginUser ?
                <Login />
            :
                <>{ props.children }</>
            }
        </>
    );
}

export default Auth