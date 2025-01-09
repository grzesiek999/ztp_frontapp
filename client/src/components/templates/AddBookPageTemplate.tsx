import {useMedia} from "use-media";
import AddBookOrganism from "../organism/AddBook/AddBookOrganism.tsx";


const DesktopTemplate = () => {
    return(
        <div className="add-book-page-template-desktop">
            <AddBookOrganism />
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

export default function AddBookPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}