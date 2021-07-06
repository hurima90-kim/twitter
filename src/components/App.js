import React, {useState, useEffect} from "react";
import AppRouter from "components/Router"
import { authService } from "../fBase";

function App() {
    const [init, setInit] = useState(false)
    const [userObj, setUserObj] = useState(null)

    // 유저 정보 저장되어있는지 확인 ( 회원가입, 로그인 )
    useEffect(() => {
      authService.onAuthStateChanged((user) => {
        if(user){
          setUserObj(user);
        }
        setInit(true)
      })
    }, [])
    return (
      <> 
        {init ? <AppRouter isLoggedIn = { Boolean(userObj) } userObj={userObj} /> : "Initializing..."}
        <footer>&copy; {new Date().getFullYear()} Twitter</footer> 
      </>
    )
}

export default App;