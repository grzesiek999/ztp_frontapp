import {SyntheticEvent, useState} from "react";


export default function RegisterPanel () {

    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)


    const register = async (e: SyntheticEvent) => {
        e.preventDefault()

        const response = await fetch('', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           credentials: 'include',
           body: JSON.stringify({
               email,
               password,
           })
        });
        if (response.ok) {

        } else { console.log(response.status, response.statusText); }
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
        <div className='register-panel-div'>
            <span className="register-panel-span">Register</span>
            <form onSubmit={register}>

                <button type="submit" className="register-panel-login-button">Create Account</button>
            </form>
        </div>
    )
}