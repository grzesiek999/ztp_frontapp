import useMedia from "use-media"
import UserProfilData from "../organism/UserProfil/UserProfilData.tsx";


const DesktopTemplate = () => {
    return(
        <div className="user-profil-page-template-div-desktop">
            <UserProfilData />
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