import useMedia from "use-media"
import {useContext} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";
import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";


const DesktopTemplate = () => {

    const {user} = useContext(UserAuth)

    return(
        <div className={"user-profil-page-data-div-desktop"}>
            <div className={'user-profil-main-data-div-desktop'}>
                <div>
                    <img src={'/public/images/office-man.png'} alt="office man icon" />
                </div>
                <div className={'user-profil-data-spans-div-desktop'}>
                    <span className={'user-data-main-span'}>User Data:</span>
                    <span>User name: {user?.name}</span>
                    <span>User surname: {user?.surname}</span>
                    <span>Role: {user?.role}</span>
                </div>
            </div>
            <div className={'user-profil-change-data-div-desktop'}>
                <span><Link to={ROUTER_PATH.ADMIN_CHANGE_PHONE}>Change Phone Number &#128241;</Link></span>
                <span><Link to={ROUTER_PATH.ADMIN_CHANGE_EMAIL}>Change Email &#128232;</Link></span>
                <span><Link to={ROUTER_PATH.ADMIN_CHANGE_PASSWORD}>Change Password &#128272;</Link></span>
            </div>
        </div>
    )
}


const MobileTemplate = () => {
    return(
        <div>

        </div>
    )
}

export default function AdminProfilData () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}