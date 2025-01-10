import useMedia from "use-media"
import AdminProfilData from "../organism/AdminProfil/AdminProfilData"


const DesktopTemplate = () => {
    return(
        <div className="user-profil-page-template-div-desktop">
            <AdminProfilData />
        </div>
    )
}


const MobileTemplate = () => {
    return(
        <div>
            
        </div>
    )
}


export default function AdminProfilePageTemplate () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}