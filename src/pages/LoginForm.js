import React from "react";
import RoundedContainer from "../components/RoundedContainer";
import {Input, InputTitle, RememberMeLayout, RememberMeText, SubmitInput, Title} from "../components/Components";

const checkBoxStyle = {
    color: "blue"
};
const LOGIN_URL = "http://localhost:1487/api/v1/auth/login";

class LoginForm extends React.Component {
    rememberMeTextClickListener() {
        this.setState({
            rememberMe: !this.state.rememberMe
        })
        console.log(this.state)
    }

    constructor(props) {
        super(props);
        this.state
            = {
            loginValue: '',
            passwordValue: '',
            rememberMe: true
        }
        this.rememberMeTextClickListener
            = this.rememberMeTextClickListener.bind(this);
        this.login = this.login.bind(this);

    }

    login() {
        let loginFieldValue = document.getElementById('loginInput').value.trim();
        let passwordFieldValue = document.getElementById('passwordInput').value.trim();
        if (loginFieldValue === undefined ||
            loginFieldValue === null ||
            passwordFieldValue === undefined ||
            passwordFieldValue === null ||
            loginFieldValue.length === 0 ||
            passwordFieldValue.length === 0) {
            console.error("error")
            return false;
        }
        let payload = {
            login: loginFieldValue,
            password: passwordFieldValue
        };
        // let data = new FormData();
        // data.append("json", JSON.stringify(payload));

        fetch(LOGIN_URL,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(payload)
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                alert(JSON.stringify(data))
            })
    }

    render() {
        return <RoundedContainer>
            <Title>PayMe | Login</Title>
            <div>
                <InputTitle>Login</InputTitle>
                <Input
                    type="text"
                    id={"loginInput"}
                />
            </div>
            <div>
                <InputTitle>Password</InputTitle>
                <Input
                    type="password"
                    id={"passwordInput"}
                />
            </div>
            <RememberMeLayout>
                <Input onChange={this.rememberMeTextClickListener.bind(this)} checked={this.state.rememberMe}
                       style={checkBoxStyle} type="checkbox" name="rememberMe"
                       id="rememberMe"/>
                <RememberMeText onClick={this.rememberMeTextClickListener.bind(this)}>Remember me</RememberMeText>
            </RememberMeLayout>
            <SubmitInput onClick={this.login} value={"Login"}/>
        </RoundedContainer>

    }


}

export default LoginForm