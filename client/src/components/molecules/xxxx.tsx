import useMedia from "use-media"



const DesktopTemplate = () => {
    return (
        <>
        </>
    )
}


const MobileTemplate = () => {
    return (
        <div>
            
        </div>
    )
}


export default function xxxx () {
    const isMobile = useMedia({maxWidth: 1170})
    
    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}