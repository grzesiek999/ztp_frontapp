import {useMedia} from "use-media";
import LibrarySearchPanel from "../organism/Library/LibrarySearchPanel";


const DesktopTemplate = () => {
    return (
        <div className='library-page-template-div-desktop'>
            <span className='library-page-span'>Search for Books</span>
            <LibrarySearchPanel />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    )
}

export default function LibraryPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}