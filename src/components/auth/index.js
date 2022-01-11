import * as React from "react";
import {LoginScreen} from "./Login";
import {SignUpScreen} from "./SignUp";


function Index() {
    [isLogin,setIsLogin] = React.useState(true)
    if(isLogin) return <LoginScreen setIsLogin={setIsLogin}/>
    return <SignUpScreen setIsLogin={setIsLogin}/>
}

export default Index
