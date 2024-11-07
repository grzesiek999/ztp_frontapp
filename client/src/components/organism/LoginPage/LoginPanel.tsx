import { SyntheticEvent, useState } from "react"
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../routing/RouterPath";
import InputModel from "../../molecules/InputModels";



export default function LoginPanel () {
    
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    
    const signin = async (e: SyntheticEvent) => {
        e.preventDefault();
    
        const response = await fetch('', {
            method: '',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        if (response.ok) {
    
        } else {console.log(response.status, response.statusText)}
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
            <span className="login-panel-span">Login</span>
            <form onSubmit={signin}> 
                <InputModel
                    containerClassName={'login-panel-input-container'} 
                    labelContent={'User email:'} 
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
            </form>
            <Link to={ROUTER_PATH.REGISTER}>Create Account</Link>
            <Link to={'/'} className="login-panel-forget-password-span">Forget Password ?</Link>
        </div>
    )
}