import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";

const WebsiteLayoutButtons = () => {
    return (
        <div className="website-layout-buttons-div">
            <Link to={ROUTER_PATH.USER_LOGIN} className="user-login-link">Login User</Link>
            <Link to={ROUTER_PATH.ADMIN_LOGIN} className="admin-login-link">Login Admin</Link>
        </div>
    )
}

export default WebsiteLayoutButtons