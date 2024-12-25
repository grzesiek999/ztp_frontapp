import {useMedia} from "use-media";
import {useContext} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";


const DesktopTemplate = () => {

    const {logout} = useContext(UserAuth)

    const logoutButtonclick = () => {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('token_type')
        logout()
    }

    return (
        <div className='website-layout-avatar-div'>
            <img src={'/public/icons/user.png'} alt="user error" />
            <button type='button' className='logout-button' onClick={logoutButtonclick}>Logout</button>
        </div>
    )
}

const MobileTemplate = () => {

    return (
        <div></div>
    )
}


export default function WebsiteLayoutAvatar() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}