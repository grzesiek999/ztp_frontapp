import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";

const WebsiteLayoutButtons = () => {
    return (
        <div className="website-layout-buttons-div">
            <Link to={ROUTER_PATH.USER_LOGIN} className="user-login-link">Sign in to Us</Link>
        </div>
    )
}

export default WebsiteLayoutButtons