import {useMedia} from "use-media";
import LoginPanel from "../organism/LoginPage/LoginPanel";


const DesktopTemplate = () => {
    return (
        <div className="login-page-template-div">
            <LoginPanel admin={true} />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <>
            Mobile
        </>
    )
}

export default function ALoginPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}