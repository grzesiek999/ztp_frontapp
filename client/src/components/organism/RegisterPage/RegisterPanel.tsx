import {SyntheticEvent, useState} from "react";
import InputModel from "../../molecules/InputModels";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../routing/RouterPath";


export default function RegisterPanel () {

    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [repeatPassword, setRepeatPassword] = useState<string | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [surname, setSurname] = useState<string | null>(null)
    const [phone, setPhone] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const navigate = useNavigate()


    const register = async (e: SyntheticEvent) => {
        e.preventDefault()

        if(password !== repeatPassword) { setMessage("Passwords are not the same !"); }
        else {
            const response = await fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
                name,
                surname,
                phone
            })
            });
            if (response.ok) {
                return navigate(ROUTER_PATH.ACCOUNT_CREATED);
            } else { console.log(response.status, response.statusText); }
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

    const handleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setRepeatPassword(null); }
        else { setRepeatPassword(e.target.value); }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setName(null); }
        else { setName(e.target.value); }
    }

    const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setSurname(null); }
        else { setSurname(e.target.value); }
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setPhone(null); }
        else { setPhone(e.target.value); }
    }

    return (
        <div className='register-panel-div'>
            <span className="register-panel-span">Create Account</span>
            <form onSubmit={register}>
                <div className="register-form-main-div">
                    <div className="register-form-part-div">
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Email:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'text'}
                            step={undefined} 
                            value={email} 
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'email@gmail.com'} 
                            onChange={handleEmail}
                        />
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Password:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'password'}
                            step={undefined} 
                            value={password} 
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'password'} 
                            onChange={handlePassword}
                        />
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Confirm Password:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'password'}
                            step={undefined} 
                            value={repeatPassword} 
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'password'} 
                            onChange={handleRepeatPassword}
                        />
                    </div>
                    <div className="register-form-part-div">
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Name:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'text'}
                            step={undefined} 
                            value={name} 
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'name'} 
                            onChange={handleName}
                        />
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Surname:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'text'}
                            step={undefined} 
                            value={surname} 
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'surname'} 
                            onChange={handleSurname}
                        />
                        <InputModel
                            containerClassName={'register-panel-input-container'} 
                            labelContent={'Phone number:'} 
                            labelClassName={'register-panel-label'} 
                            inputType={'text'}
                            step={undefined} 
                            value={phone}
                            inputClassName={'register-panel-input'} 
                            pleaceholder={'664 882 320'} 
                            onChange={handlePhone}
                        />
                    </div>
                </div>
                {message && <span className="login-panel-message">{message}</span>}
                <button type="submit" className="register-panel-login-button">Create Account</button>
            </form>
        </div>
    )
}