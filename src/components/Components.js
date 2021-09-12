import React from "react";

export {Title, Input, InputLabel, InputWithLabel, ErrorLabel, RememberMeText, RememberMeLayout, InputTitle, SubmitInput}

function Title(props) {
    return <h1 style={{fontSize: "2em"}}>{props.children}</h1>;
}

function Input(props) {
    return <input onChange={props.onChange}
                  checked={props.checked}
                  onClick={props.onClick}
                  type={props.type}
                  name={props.name}
                  id={props.id}
                  value={props.value}
                  style={props.style ?? inputStyle}/>
}

function InputLabel(props) {
    return <div style={inputLabelStyle}>{props.children}</div>
}

function InputWithLabel(props) {
    return <div>{props.children}</div>;
}

function ErrorLabel(props) {
    return <div
        style={errorStyle}
        hidden={props.hidden}>
        {props.children}
    </div>;
}

function InputTitle(props) {
    return <div style={inputTitleStyle}>{props.children}</div>
}

function RememberMeText(props) {
    return <div onClick={props.onClick} style={RememberMeTextStyle}>{props.children}</div>;
}

function RememberMeLayout(props) {
    return <div style={RememberMeLayoutStyled}>{props.children}</div>;
}

function SubmitInput(props) {
    return <input style={submitInputStyle} onClick={props.onClick} type="submit" value={props.value}/>
}

const inputLabelStyle = {
    textAlign: "center",
    color: "#000000"
}

const errorStyle = {
    color: "#d72424",
    fontSize: "small"
}
const RememberMeTextStyle = {
    textDecoration: "underline",
    color: "#0b49e2",
    cursor: "pointer"
};
const submitInputStyle = {
    borderWidth: "0.5em",
    padding: "1px 2px",
    border: "1px solid",
    width: "100%",
    borderRadius: "2em",
    background: "none",
    borderImageSource: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    borderImageSlice: "2"
}
const RememberMeLayoutStyled = {
    display: 'flex'
};
const inputTitleStyle = {
    textAlign: "center",
    color: "#000000"
}
const inputStyle = {
    width: "100%"
}
