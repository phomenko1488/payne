import './App.css';
import LoginForm from "./pages/LoginForm";
import CenterFlexBox from "./components/CenterFlexBox";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";

function App() {

    return (
        <BrowserRouter>
            <CenterFlexBox>
                <Route path={"/login"}>
                    <LoginForm/>
                </Route>
                <Route path={"/registration"}>
                    <Registration/>
                </Route>
                <Route path={"/profile"}>
                    <Profile/>
                </Route>
            </CenterFlexBox>
        </BrowserRouter>
    );
}

export default App;
