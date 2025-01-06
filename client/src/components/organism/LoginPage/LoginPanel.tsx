import {SyntheticEvent, useContext, useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../routing/RouterPath";
import InputModel from "../../molecules/InputModels";
import {mapApiResponseToUser} from "../../../utils/UserSession.tsx";
import {UserAuth} from "../../../context/UserContext.tsx";



export default function LoginPanel ({admin}: {admin: boolean}) {
    
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const navigate = useNavigate();
    const {login} = useContext(UserAuth);
    const [message, setMessage] = useState<string | null>(null)


    const fetchUser = async () => {

        const token = sessionStorage.getItem('access_token');

        const response = await fetch('http://localhost:8000/users/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        });
        if (response.ok) {
            const data = await response.json();
            const user = mapApiResponseToUser(data);
            login(user);
        } else {
            console.log(response.status, response.statusText)
        }
    }

    
    const signin = async (e: SyntheticEvent) => {
        e.preventDefault();
    
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('access_token', data.access_token)
            sessionStorage.setItem('token_type', data.token_type)
            fetchUser();
            return navigate(ROUTER_PATH.HOME);
        } else {
            setMessage("Incorrect enail or passoword !")
            console.log(response.status, response.statusText);
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setEmail(null); }
        else { setEmail(e.target.value); }
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setPassword(null); }
        else { setPassword(e.target.value); }
    }

    return (
        <div className="login-panel-div">
            <span className={admin ? 'admin-login-panel-span' : 'login-panel-span'}>{admin ? 'Admin Login' : 'Login'}</span>
            <form onSubmit={signin}> 
                <InputModel
                    containerClassName={'login-panel-input-container'} 
                    labelContent={admin ? 'Admin email:' : 'User email:'} 
                    labelClassName={'login-panel-label'} 
                    inputType={'text'}
                    step={undefined} 
                    value={email} 
                    inputClassName={'login-panel-input'} 
                    pleaceholder={'email@gmail.com'} 
                    onChange={handleEmail}
                />
                <InputModel
                    containerClassName={'login-panel-input-container'} 
                    labelContent={'Password:'} 
                    labelClassName={'login-panel-label'} 
                    inputType={'password'}
                    step={undefined} 
                    value={password} 
                    inputClassName={'login-panel-input'} 
                    pleaceholder={'password'} 
                    onChange={handlePassword}
                />
                <button type="submit" className="login-panel-login-button">LogIn</button>
                {message && <span className="login-panel-message">{message}</span>}
            </form>
            {!admin && <Link to={ROUTER_PATH.REGISTER}>Create Account</Link> }
            <Link to={'/'} className="login-panel-forget-password-span">Forget Password ?</Link>
        </div>
    )
}