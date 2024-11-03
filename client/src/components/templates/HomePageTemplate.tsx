import {useMedia} from 'use-media'
import HomePageTopContainer from "../organism/HomePage/HomePageTopContainer.tsx";


const DesktopTemplate = () => {
    return (
        <div className='home-page-template-div'>
            <HomePageTopContainer />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>
            mobile
        </div>
    )
}

export default function HomePageTemplate () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}
