import React, {useState} from "react";
import styled from "styled-components";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const LoginSignUpContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = () => {
    const [option, setOption] = useState('SignUp');
    const handleClick = (event) => {
        event.preventDefault();

    }
    return(
        <LoginSignUpContainer>
            {option==='Login' && <LoginForm/>}
            {option==='SignUp' && <SignUpForm/>}
        </LoginSignUpContainer>
    );
}
export default Login;