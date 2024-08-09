import React, {useState} from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';
import {setCredentials} from "../utils/auth/authSlice";
import {useDispatch} from "react-redux";
import axios from "axios";

const OuterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginFormContainer = styled(Form)`
    background: white;
    height: 60%;
    width: 30%;
    display: flex;
    flex-direction: column;
    border: solid 1px lightgray;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
    padding: 2rem;
    align-items: center;
    justify-content: space-evenly;
`;

const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormLabel = styled(Form.Label)`
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #3f37c9;
`;

const FormControl = styled(Form.Control)`
    border-radius: 5px;
    border: 1px solid #b5179e;

    &:focus {
        border-color: #7209b7;
        box-shadow: 0 0 5px rgba(114, 9, 183, 0.5);
    }
`;

const Heading = styled.h2`
    color: #7209b7;
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    padding: 10px 20px;
    font-size: 1em;
    color: #FFF;
    background-color: #B5179E;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25); /* Elevation effect */
    transform: translateZ(5px); /* Z-index elevation */

    &:hover {
        background-color: #9B13A3;
        transform: translateZ(8px) scale(1.05); /* Slightly increase elevation on hover */
    }
`;

const SignupLink = styled.div`
    margin-top: 1rem;
    color: #4895ef;
    font-size: 0.9rem;

    a {
        color: #4895ef;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {email, password});
            const {user, token} = response.data;

            // Store the JWT and user info in Redux
            dispatch(setCredentials({user, token}));

            // Redirect to a protected route, for example
            navigate('/dashboard');
        } catch (error) {
            console.error("Failed to login", error);
        }
    };

    return (
        <OuterContainer>
            <LoginFormContainer onSubmit={handleSubmit}>
                <Heading>Login</Heading>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <StyledButton variant="primary" type="submit">
                    Submit
                </StyledButton>
                <SignupLink>
                    Not a Member? <Link to="/SignUpForm">Signup</Link>
                </SignupLink>
            </LoginFormContainer>
        </OuterContainer>
    );
}

export default LoginForm;
