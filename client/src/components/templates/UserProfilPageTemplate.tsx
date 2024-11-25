import useMedia from "use-media"


const DesktopTemplate = () => {
    return(
        <div className="user-profil-page-template-div-desktop">
            usr image
        </div>
    )
}


const MobileTemplate = () => {
    return(
        <div>
            
        </div>
    )
}


export default function UserProfilePageTemplate () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}