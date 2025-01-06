import {useMedia} from "use-media";


const DesktopTemplate = () => {

    return (
        <div className={'book-detail-image-div'}>
            <img src={'/public/images/book-icon.png'} alt="book icon error" />
        </div>
    )
}

const MobileTemplate = () => {

    return (
        <div>

        </div>
    )
}


export default function UserLibraryBookAvatar () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}