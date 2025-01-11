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

    const goToUserProfil = () => {
        if(user?.role === 'User') { navigate(`/user/${user?.id}`); }
        else if (user?.role === 'Admin' || user?.role === 'Worker') { navigate(`/admin/${user?.id}`); }
        else { navigate(ROUTER_PATH.NO_ACCESS); }
    }

    return (
        <div className='website-layout-avatar-div'>
            <img src={'/public/icons/user.png'} alt="user error" onClick={()=>{ goToUserProfil(); }}/>
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