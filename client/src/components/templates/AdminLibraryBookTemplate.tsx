import {useMedia} from "use-media";



const DesktopTemplate = () => {

    return (
        <div className='admin-library-book-template-desktop'>
            
        </div>
    )
}


const MobileTemplate = () => {

    return (
        <div>

        </div>
    )
}

export default function AdminLibraryBookTemplate () {
    const isMobile = useMedia({maxWidth: 1170})
    
    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}