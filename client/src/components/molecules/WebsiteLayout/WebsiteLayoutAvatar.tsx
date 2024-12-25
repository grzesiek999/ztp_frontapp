import {useMedia} from "use-media";
import {useContext} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";


const DesktopTemplate = () => {

    const {user, logout} = useContext(UserAuth)
    const navigate = useNavigate();


    const logoutButtonclick = () => {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token_type');
        logout();
        navigate(ROUTER_PATH.HOME);
    }

    return (
        <div className='website-layout-avatar-div'>
            <img src={'/public/icons/user.png'} alt="user error" onClick={()=>{navigate(`/user/${user?.name}`)}}/>
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