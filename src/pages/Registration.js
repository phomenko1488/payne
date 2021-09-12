import React from "react";
import RoundedContainer from "../components/RoundedContainer";
import {Title, Input, ErrorLabel, InputWithLabel, InputLabel, SubmitInput} from "../components/Components";

const REGISTRATION_URL = "http://localhost:1487/api/v1/users";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state
            = {
            usernameErrorLabelHidden: true,
            emailErrorLabelHidden: true,
            passwordErrorLabelHidden: true
        }
        this.registration = this.registration.bind(this);
        this.validateEmail = this.validateEmail.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateUsername = this.validateUsername.bind(this)
    }

    validateEmail(email) {
        email = email.target.value
        let regexValue = String(email.match(/[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
        if (regexValue != null) {
            console.log(regexValue)
            console.log(email)
            let valid = regexValue.length === email.length;
            this.setState({emailErrorLabelHidden: valid})
        } else
            this.setState({emailErrorLabelHidden: false})
    }

    validatePassword(password) {
        password = password.target.value
        this.setState({passwordErrorLabelHidden: password.length >= 6})
    }

    validateUsername(username) {
        username = username.target.value
        let regexValue = String(username.match(/[A-Za-z0-9]+/g))
        if (regexValue != null) {
            let valid = username.length >= 4 && username.length <= 9 && regexValue.length === username.length;
            this.setState({usernameErrorLabelHidden: valid})
        } else
            this.setState({usernameErrorLabelHidden: false})
    }

    registration() {
        let usernameFieldValue = document.getElementById('usernameInput').value.trim();
        let emailFieldValue = document.getElementById('emailInput').value.trim();
        let passwordFieldValue = document.getElementById('passwordInput').value.trim();
        if (usernameFieldValue === undefined ||
            usernameFieldValue === null ||
            usernameFieldValue.length === 0 ||
            emailFieldValue === undefined ||
            emailFieldValue === null ||
            emailFieldValue.length === 0 ||
            passwordFieldValue === undefined ||
            passwordFieldValue === null ||
            passwordFieldValue.length === 0) {
            console.error("error")
            return false;
        }
        let payload = {
            username: usernameFieldValue,
            email: emailFieldValue,
            password: passwordFieldValue
        };
        // let data = new FormData();
        // data.append("json", JSON.stringify(payload));

        fetch(REGISTRATION_URL,
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
            <Title>PayMe | Registration</Title>
            <InputWithLabel>
                <InputLabel>Username</InputLabel>
                <Input
                    type="text"
                    id={"usernameInput"}
                    onChange={this.validateUsername}
                />
                <ErrorLabel hidden={this.state.usernameErrorLabelHidden}>
                    Username can contains letter's and number's lengths must be from 4 to 9 symbols.
                </ErrorLabel>
            </InputWithLabel>
            <InputWithLabel>
                <InputLabel>Email</InputLabel>
                <Input
                    type={"email"}
                    id={"emailInput"}
                    onChange={this.validateEmail}
                />
                <ErrorLabel
                    hidden={this.state.emailErrorLabelHidden}
                >Incorrect email!</ErrorLabel>
            </InputWithLabel>
            <InputWithLabel>
                <InputLabel>Password</InputLabel>
                <Input
                    type="password"
                    id={"passwordInput"}
                    onChange={
                        this.validatePassword
                    }
                />
                <ErrorLabel
                    hidden={this.state.passwordErrorLabelHidden}
                >Password must be from 6 to 14 symbols</ErrorLabel>
            </InputWithLabel>
            <SubmitInput
                onClick={this.registration}
                value="Sign up!"/>
        </RoundedContainer>

    }

}

export default Registration