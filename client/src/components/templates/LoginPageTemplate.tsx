import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return(
        <div className="login-page-template-div">

        </div>
    )
}

const MobileTemplate = () => {
    return(
        <div>
            mobile
        </div>
    )
}

export default function LoginPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return(
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}