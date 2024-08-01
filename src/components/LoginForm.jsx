import React, {useState} from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginFormContainer = styled(Form)`
    height: 60%;
    width: 40%;
    display: flex;
    flex-direction: column;
    border: solid 1px lightgray;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
`;
const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: column;
`;
const FormLabel = styled(Form.Label)`
    margin-bottom: 0.5rem;
`;
const FormControl = styled(Form.Control)``;
const Heading = styled.div`
    color: purple;
    font-size: 1.2rem;
`;
const StyledButton = styled(Button)``;

const LoginForm = () => {
    return(

                <LoginFormContainer>
                    <Heading>Login</Heading>
                    <FormGroup >
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <StyledButton variant="primary" type="submit">
                        Submit
                    </StyledButton>
                </LoginFormContainer>
    );
}
export default LoginForm;