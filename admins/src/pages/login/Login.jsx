import { useContext, useState } from 'react';
import './login.scss';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    const [ credentials, setCredentials ] = useState({
        username : undefined,
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const handleChnage = (e) =>{
        setCredentials(prev=>({
            ...prev, [e.target.id]: e.target.value
        }));
    };

    //Api call
    const handleClick = async (event) =>{
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post("auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data} );
            navigate("/");
        }
        catch(err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

console.log(user);

    return(
        <div className="login">
            <div className="loginContainer">
                <input className='loginInput' type="text" id='username' placeholder='username' onChange={handleChnage}/>
                <input className='loginInput' type="password" id='password' placeholder='password' onChange={handleChnage}/>
                <button disabled={loading} className='loginButton' onClick={handleClick}>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
};
