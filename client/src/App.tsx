import Router from "./routing/Routing.tsx";
import {useContext, useEffect} from "react";
import {UserAuth} from "./context/UserContext.tsx";
import {mapApiResponseToUser} from "./utils/UserSession.tsx";



const App = () => {

  const {login, user} = useContext(UserAuth);

  const fetchUser = async () => {

    const token = sessionStorage.getItem('access_token');

    const response = await fetch('http://localhost:8000/users/dashboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      const user = mapApiResponseToUser(data);
      login(user);
    } else {
      console.log(response.status, response.statusText)
    }
  }

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  return (
    <Router />
  )
}

export default App
