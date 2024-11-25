import {useMedia} from "use-media";
import RegisterPanel from "../organism/RegisterPage/RegisterPanel.tsx";


const DesktopTemplate = () => {
    return(
        <div className="register-page-template-div">
            <RegisterPanel />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <>
            mobile
        </>
    )
}

export default function RegisterPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return(
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}